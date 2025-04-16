CREATE DATABASE IF NOT EXISTS recipe_portal;
USE recipe_portal;

-- Users table
CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Categories table
CREATE TABLE categories (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL
);

-- Recipes table
CREATE TABLE recipes (
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(200) NOT NULL,
    description TEXT,
    ingredients TEXT NOT NULL,
    instructions TEXT NOT NULL,
    cooking_time INT NOT NULL,
    servings INT NOT NULL,
    difficulty ENUM('Easy', 'Medium', 'Hard') NOT NULL,
    image_url VARCHAR(255),
    category_id INT,
    user_id INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (category_id) REFERENCES categories(id),
    FOREIGN KEY (user_id) REFERENCES users(id)
);

-- Saved recipes table
CREATE TABLE saved_recipes (
    user_id INT,
    recipe_id INT,
    saved_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (user_id, recipe_id),
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (recipe_id) REFERENCES recipes(id)
);

-- Insert sample categories
INSERT INTO categories (name) VALUES 
('Breakfast'),
('Lunch'),
('Dinner'),
('Dessert'),
('Appetizer'),
('Soup'),
('Salad'),
('Beverage');

-- Insert sample user
INSERT INTO users (name, email, password) VALUES
('Admin Chef', 'admin@recipes.com', '$2a$10$somehashedpassword');

-- Insert sample recipes
INSERT INTO recipes (title, description, ingredients, instructions, cooking_time, servings, difficulty, image_url, category_id, user_id) VALUES
(
    'Classic Spaghetti Carbonara',
    'A traditional Italian pasta dish with eggs, cheese, pancetta and black pepper',
    '400g spaghetti\n200g pancetta\n4 large eggs\n100g Pecorino Romano\n100g Parmigiano Reggiano\nBlack pepper\nSalt',
    '1. Cook pasta in salted water\n2. Fry pancetta until crispy\n3. Mix eggs, cheese, and pepper\n4. Combine all ingredients while pasta is hot',
    30,
    4,
    'Medium',
    'https://images.unsplash.com/photo-1612874742237-6526221588e3',
    3,
    1
),
(
    'Chicken Tikka Masala',
    'Grilled chicken in a rich and creamy tomato-based curry sauce',
    '800g chicken breast\n2 cups yogurt\n2 tbsp garam masala\n400g tomato sauce\n1 cup heavy cream\nOnions, garlic, ginger\nVarious spices',
    '1. Marinate chicken in yogurt and spices\n2. Grill chicken until charred\n3. Prepare curry sauce\n4. Combine chicken and sauce',
    60,
    6,
    'Medium',
    'https://images.unsplash.com/photo-1565557623262-b51c2513a641',
    3,
    1
); 