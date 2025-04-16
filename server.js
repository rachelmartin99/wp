require('dotenv').config();
const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const config = require('./js/config');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public'));

// Database connection
const db = mysql.createConnection(config.db);

// Connect to database
db.connect((err) => {
    if (err) {
        console.error('Error connecting to database:', err);
        return;
    }
    console.log('Connected to database');
});

// Authentication middleware
const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: 'No token provided' });
    }

    jwt.verify(token, 'your_jwt_secret', (err, user) => {
        if (err) {
            return res.status(403).json({ message: 'Invalid token' });
        }
        req.user = user;
        next();
    });
};

// Routes

// Get all recipes
app.get('/api/recipes', (req, res) => {
    const query = `
        SELECT r.*, u.name as author_name, c.name as category_name 
        FROM recipes r 
        JOIN users u ON r.user_id = u.id 
        LEFT JOIN categories c ON r.category_id = c.id
    `;
    
    db.query(query, (err, results) => {
        if (err) {
            console.error('Error fetching recipes:', err);
            return res.status(500).json({ message: 'Error fetching recipes' });
        }
        res.json(results);
    });
});

// Get single recipe
app.get('/api/recipes/:id', (req, res) => {
    const query = `
        SELECT r.*, u.name as author_name, c.name as category_name 
        FROM recipes r 
        JOIN users u ON r.user_id = u.id 
        LEFT JOIN categories c ON r.category_id = c.id 
        WHERE r.id = ?
    `;
    
    db.query(query, [req.params.id], (err, results) => {
        if (err) {
            console.error('Error fetching recipe:', err);
            return res.status(500).json({ message: 'Error fetching recipe' });
        }
        if (results.length === 0) {
            return res.status(404).json({ message: 'Recipe not found' });
        }
        res.json(results[0]);
    });
});

// Add new recipe
app.post('/api/recipes', authenticateToken, (req, res) => {
    const { 
        title, description, ingredients, instructions, 
        cooking_time, servings, difficulty, image_url, category_id 
    } = req.body;

    const query = `
        INSERT INTO recipes 
        (title, description, ingredients, instructions, cooking_time, servings, difficulty, image_url, category_id, user_id) 
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    db.query(
        query,
        [title, description, ingredients, instructions, cooking_time, servings, difficulty, image_url, category_id, req.user.id],
        (err, result) => {
            if (err) {
                console.error('Error adding recipe:', err);
                return res.status(500).json({ message: 'Error adding recipe' });
            }
            res.status(201).json({ id: result.insertId, ...req.body });
        }
    );
});

// Update recipe
app.put('/api/recipes/:id', authenticateToken, (req, res) => {
    const { 
        title, description, ingredients, instructions, 
        cooking_time, servings, difficulty, image_url, category_id 
    } = req.body;

    const query = `
        UPDATE recipes 
        SET title = ?, description = ?, ingredients = ?, instructions = ?, 
            cooking_time = ?, servings = ?, difficulty = ?, image_url = ?, category_id = ? 
        WHERE id = ? AND user_id = ?
    `;

    db.query(
        query,
        [title, description, ingredients, instructions, cooking_time, servings, difficulty, image_url, category_id, req.params.id, req.user.id],
        (err, result) => {
            if (err) {
                console.error('Error updating recipe:', err);
                return res.status(500).json({ message: 'Error updating recipe' });
            }
            if (result.affectedRows === 0) {
                return res.status(404).json({ message: 'Recipe not found or unauthorized' });
            }
            res.json({ id: req.params.id, ...req.body });
        }
    );
});

// Delete recipe
app.delete('/api/recipes/:id', authenticateToken, (req, res) => {
    const query = 'DELETE FROM recipes WHERE id = ? AND user_id = ?';
    
    db.query(query, [req.params.id, req.user.id], (err, result) => {
        if (err) {
            console.error('Error deleting recipe:', err);
            return res.status(500).json({ message: 'Error deleting recipe' });
        }
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Recipe not found or unauthorized' });
        }
        res.status(204).send();
    });
});

// User authentication routes
app.post('/api/auth/register', async (req, res) => {
    const { name, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    const query = 'INSERT INTO users (name, email, password) VALUES (?, ?, ?)';
    
    db.query(query, [name, email, hashedPassword], (err, result) => {
        if (err) {
            if (err.code === 'ER_DUP_ENTRY') {
                return res.status(400).json({ message: 'Email already exists' });
            }
            console.error('Error registering user:', err);
            return res.status(500).json({ message: 'Error registering user' });
        }
        res.status(201).json({ id: result.insertId, name, email });
    });
});

app.post('/api/auth/login', async (req, res) => {
    const { email, password } = req.body;

    const query = 'SELECT * FROM users WHERE email = ?';
    
    db.query(query, [email], async (err, results) => {
        if (err) {
            console.error('Error during login:', err);
            return res.status(500).json({ message: 'Error during login' });
        }
        if (results.length === 0) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        const user = results[0];
        const validPassword = await bcrypt.compare(password, user.password);

        if (!validPassword) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        const token = jwt.sign({ id: user.id }, 'your_jwt_secret', { expiresIn: '24h' });
        res.json({ token, user: { id: user.id, name: user.name, email: user.email } });
    });
});
// Add this to your existing server.js file

// Middleware to handle file uploads (if you want to handle image uploads)
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

// POST endpoint to add a new recipe
app.post('/api/recipes/add', async (req, res) => {
    const {
        title,
        description,
        category,
        cookingTime,
        servings,
        difficulty,
        chef,
        ingredients,
        instructions,
        imageUrl
    } = req.body;

    // Start a transaction
    db.beginTransaction(async (err) => {
        if (err) {
            return res.status(500).json({ error: 'Transaction error' });
        }

        try {
            // Insert the recipe
            const [recipeResult] = await db.promise().query(
                `INSERT INTO recipes (
                    title, description, image_url, cooking_time, 
                    servings, difficulty, chef, category
                ) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
                [title, description, imageUrl, cookingTime, servings, difficulty, chef, category]
            );

            const recipeId = recipeResult.insertId;

            // Insert ingredients
            for (const ingredient of ingredients) {
                await db.promise().query(
                    'INSERT INTO ingredients (recipe_id, ingredient_text) VALUES (?, ?)',
                    [recipeId, ingredient]
                );
            }

            // Insert instructions
            for (let i = 0; i < instructions.length; i++) {
                await db.promise().query(
                    'INSERT INTO instructions (recipe_id, step_number, instruction_text) VALUES (?, ?, ?)',
                    [recipeId, i + 1, instructions[i]]
                );
            }

            // Commit the transaction
            await db.promise().commit();
            res.status(201).json({
                message: 'Recipe added successfully',
                recipeId: recipeId
            });

        } catch (error) {
            // If there's an error, rollback the transaction
            await db.promise().rollback();
            res.status(500).json({ error: error.message });
        }
    });
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
}); 