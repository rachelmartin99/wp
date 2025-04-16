// Store recipes in memory
const recipes = [
            {
                id: 1,
                title: "Blueberry Pancakes",
                description: "Fluffy pancakes loaded with fresh blueberries",
                image: "https://images.unsplash.com/photo-1528207776546-365bb710ee93",
                ingredients: [
                    "2 cups all-purpose flour",
                    "2 tablespoons sugar",
                    "2 teaspoons baking powder",
                    "1/2 teaspoon salt",
                    "2 cups milk",
                    "2 large eggs",
                    "1/4 cup melted butter",
                    "1 cup fresh blueberries"
                ],
                instructions: [
                    "Mix dry ingredients in a large bowl",
                    "Whisk milk, eggs, and melted butter in another bowl",
                    "Combine wet and dry ingredients until just mixed",
                    "Fold in blueberries gently",
                    "Cook on a hot griddle until bubbles form",
                    "Flip and cook other side until golden brown"
                ],
                cookingTime: 20,
                servings: 4,
                difficulty: "Easy",
                authorName: "Chef Emma",
                category: "breakfast"
            },
            {
                id: 2,
        title: "Chocolate Soufflé",
        description: "Light and airy chocolate dessert that rises beautifully",
        image: "https://images.unsplash.com/photo-1571115177098-24ec42ed204d",
                ingredients: [
            "4 oz dark chocolate",
            "3 tablespoons butter",
            "3 eggs, separated",
            "1/4 cup sugar",
            "1 tablespoon flour",
            "1/4 teaspoon cream of tartar",
            "Powdered sugar for dusting"
                ],
                instructions: [
            "Melt chocolate and butter together",
            "Whisk egg yolks with half the sugar until pale",
            "Beat egg whites with cream of tartar and remaining sugar",
            "Fold chocolate into yolk mixture, then fold in whites",
            "Pour into ramekins and bake at 375°F for 15-18 minutes",
            "Dust with powdered sugar and serve immediately"
                ],
                cookingTime: 30,
        servings: 4,
                difficulty: "Hard",
        authorName: "Chef Pierre",
        category: "dessert"
            },
            {
                id: 3,
        title: "Spaghetti Carbonara",
        description: "Classic Italian pasta dish with creamy egg sauce and crispy pancetta",
                image: "https://images.unsplash.com/photo-1612874742237-6526221588e3",
        ingredients: [
            "1 lb spaghetti",
            "4 oz pancetta or guanciale, diced",
            "4 large eggs",
            "1 cup freshly grated Pecorino Romano",
            "1 cup freshly grated Parmigiano-Reggiano",
            "2 cloves garlic, minced",
            "Black pepper to taste",
            "Salt for pasta water"
        ],
        instructions: [
            "Cook pasta in salted water until al dente",
            "While pasta cooks, crisp pancetta in a large pan",
            "Whisk eggs, cheese, and pepper in a bowl",
            "Toss hot pasta with pancetta",
            "Quickly stir in egg mixture off heat",
            "Serve immediately with extra cheese and pepper"
        ],
        cookingTime: 25,
                servings: 4,
        difficulty: "Medium",
        authorName: "Chef Marco",
                category: "dinner"
            },
            {
                id: 4,
        title: "Thai Green Curry",
        description: "Aromatic coconut curry with vegetables and your choice of protein",
        image: "https://images.unsplash.com/photo-1567337710282-00832b415979",
        ingredients: [
            "2 cans coconut milk",
            "3 tbsp green curry paste",
            "2 chicken breasts, sliced",
            "1 cup bamboo shoots",
            "1 cup Thai eggplant",
            "4 kaffir lime leaves",
            "2 tbsp fish sauce",
            "1 tbsp palm sugar",
            "Thai basil for garnish"
        ],
        instructions: [
            "Simmer coconut milk and curry paste until fragrant",
            "Add chicken and cook until nearly done",
            "Add vegetables and lime leaves",
            "Season with fish sauce and palm sugar",
            "Simmer until vegetables are tender",
            "Garnish with Thai basil"
        ],
        cookingTime: 35,
                servings: 4,
                difficulty: "Medium",
        authorName: "Chef Siri",
                category: "dinner"
            },
            {
        id: 5,
                title: "Greek Salad",
        description: "Fresh Mediterranean salad with chunky vegetables and feta cheese",
        image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe",
        ingredients: [
            "2 large tomatoes, chunked",
            "1 cucumber, chunked",
            "1 red onion, sliced",
            "1 green bell pepper, chunked",
            "200g feta cheese",
            "Kalamata olives",
            "Extra virgin olive oil",
            "Dried oregano",
            "Salt and pepper"
        ],
        instructions: [
            "Combine chopped vegetables in a bowl",
            "Add olives and chunks of feta",
            "Drizzle with olive oil",
            "Season with oregano, salt, and pepper",
            "Toss gently and serve"
        ],
                cookingTime: 15,
                servings: 4,
                difficulty: "Easy",
                authorName: "Chef Helena",
                category: "lunch"
            },
    {
        id: 6,
        title: "Beef Wellington",
        description: "Elegant dish of beef tenderloin wrapped in mushrooms and puff pastry",
        image: "https://images.unsplash.com/photo-1600891964092-4316c288032e",
        ingredients: [
            "2 lb beef tenderloin",
            "1 lb mushrooms, finely chopped",
            "4 slices prosciutto",
            "2 sheets puff pastry",
            "2 egg yolks, beaten",
            "2 tbsp Dijon mustard",
            "Butter and olive oil",
            "Salt and pepper"
        ],
        instructions: [
            "Sear beef on all sides and brush with mustard",
            "Cook mushroom duxelles until dry",
            "Wrap beef in prosciutto and mushrooms",
            "Encase in puff pastry",
            "Brush with egg wash",
            "Bake at 400°F for 40-45 minutes"
        ],
        cookingTime: 90,
        servings: 6,
        difficulty: "Hard",
        authorName: "Chef Gordon",
        category: "dinner"
            },
            {
                id: 7,
        title: "Mango Sticky Rice",
        description: "Sweet Thai dessert of ripe mangoes with coconut sticky rice",
        image: "https://images.unsplash.com/photo-1596797038530-2c107229654b",
        ingredients: [
            "2 cups sticky rice",
            "2 ripe mangoes",
            "1 can coconut milk",
            "1/3 cup sugar",
            "1/4 tsp salt",
            "Toasted sesame seeds"
        ],
        instructions: [
            "Soak rice for 4 hours, then steam until tender",
            "Heat coconut milk with sugar and salt",
            "Pour half the mixture over rice",
            "Slice mangoes and arrange with rice",
            "Drizzle remaining coconut sauce",
            "Sprinkle with sesame seeds"
        ],
        cookingTime: 45,
        servings: 4,
                difficulty: "Medium",
        authorName: "Chef Chai",
                category: "dessert"
            },
            {
                id: 8,
        title: "French Onion Soup",
        description: "Rich beef broth with caramelized onions and melted cheese",
        image: "https://images.unsplash.com/photo-1534939561126-855b8675edd7",
        ingredients: [
            "6 large onions, sliced",
            "8 cups beef broth",
            "1/2 cup butter",
            "1 cup white wine",
            "1 baguette, sliced",
            "2 cups Gruyere cheese",
            "Fresh thyme",
            "Salt and pepper"
        ],
        instructions: [
            "Slowly caramelize onions in butter (45 mins)",
            "Add wine and reduce",
            "Add broth and simmer",
            "Toast bread with cheese",
            "Ladle soup into bowls",
            "Top with cheesy bread and broil"
        ],
        cookingTime: 75,
        servings: 6,
        difficulty: "Medium",
        authorName: "Chef Jean",
                category: "dinner"
            },
            {
                id: 9,
        title: "Chicken Tikka Masala",
        description: "Grilled chicken in rich, creamy tomato curry sauce",
        image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641",
        ingredients: [
            "2 lbs chicken thighs",
            "2 cups yogurt for marinade",
            "2 cans tomato sauce",
            "1 cup heavy cream",
            "Garam masala",
            "Turmeric, cumin, coriander",
            "Ginger and garlic paste",
            "Fresh cilantro"
        ],
        instructions: [
            "Marinate chicken in spiced yogurt",
            "Grill or broil chicken until charred",
            "Simmer sauce with spices",
            "Add cream and chicken to sauce",
            "Simmer until thick",
            "Garnish with cilantro"
        ],
        cookingTime: 60,
                servings: 6,
                difficulty: "Medium",
                authorName: "Chef Priya",
                category: "dinner"
            },
            {
                id: 10,
        title: "Berry Pavlova",
        description: "Light and airy meringue dessert topped with cream and fresh berries",
        image: "https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81",
        ingredients: [
            "4 egg whites",
            "1 cup sugar",
            "1 tsp vanilla extract",
            "1 tsp white vinegar",
            "2 cups mixed berries",
            "1 cup heavy cream",
            "Cornstarch",
            "Mint leaves for garnish"
        ],
        instructions: [
            "Beat egg whites until soft peaks form",
            "Gradually add sugar until stiff and glossy",
            "Shape into a circle on parchment",
            "Bake at 250°F for 1.5 hours",
            "Top with whipped cream and berries",
            "Garnish with mint"
        ],
        cookingTime: 110,
        servings: 8,
        difficulty: "Hard",
        authorName: "Chef Anna",
        category: "dessert"
            },
            {
                id: 11,
        title: "Vietnamese Pho",
        description: "Traditional beef noodle soup with aromatic broth",
        image: "https://images.unsplash.com/photo-1503764654157-72d979d9af2f",
        ingredients: [
            "Rice noodles",
            "Beef bones",
            "Sliced beef",
            "Bean sprouts",
            "Thai basil",
            "Star anise, cinnamon",
            "Fish sauce",
            "Hoisin and sriracha"
        ],
        instructions: [
            "Simmer bones and spices for broth (6-8 hours)",
            "Cook rice noodles until tender",
            "Arrange noodles and raw beef in bowls",
            "Pour hot broth over beef",
            "Add fresh herbs and sprouts",
            "Serve with sauces"
        ],
        cookingTime: 480,
        servings: 6,
        difficulty: "Hard",
        authorName: "Chef Minh",
        category: "dinner"
            },
            {
                id: 12,
        title: "Shakshuka",
        description: "Eggs poached in spicy tomato sauce with peppers",
        image: "https://images.unsplash.com/photo-1590412200988-a436970781fa",
        ingredients: [
            "6 eggs",
            "2 cans diced tomatoes",
            "2 bell peppers, sliced",
            "1 onion, diced",
            "Cumin, paprika",
            "Fresh parsley",
            "Feta cheese",
            "Crusty bread"
        ],
        instructions: [
            "Sauté onions and peppers",
            "Add tomatoes and spices, simmer",
            "Create wells and crack eggs",
            "Cover and cook eggs",
            "Sprinkle with feta and parsley",
            "Serve with bread"
        ],
                cookingTime: 30,
        servings: 3,
        difficulty: "Easy",
        authorName: "Chef Yael",
        category: "breakfast"
            },
            {
                id: 13,
        title: "Homemade Pizza",
        description: "Classic Margherita pizza with fresh mozzarella",
        image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002",
        ingredients: [
            "Pizza dough",
            "San Marzano tomatoes",
            "Fresh mozzarella",
            "Fresh basil",
            "Olive oil",
            "Sea salt",
            "Black pepper",
            "Semolina flour"
        ],
        instructions: [
            "Preheat oven to highest setting",
            "Shape dough into thin circle",
            "Top with crushed tomatoes",
            "Add torn mozzarella",
            "Bake until crust is charred",
            "Top with basil and olive oil"
        ],
        cookingTime: 20,
        servings: 2,
        difficulty: "Medium",
        authorName: "Chef Mario",
        category: "dinner"
    },
    {
        id: 14,
        title: "Eggs Benedict",
        description: "Classic brunch dish with poached eggs and hollandaise",
        image: "https://images.unsplash.com/photo-1608039829572-78524f79c4c7",
        ingredients: [
            "4 English muffins",
            "8 eggs",
            "8 slices Canadian bacon",
            "4 egg yolks",
            "1 tbsp lemon juice",
            "1/2 cup butter",
            "Cayenne pepper",
            "Fresh chives"
        ],
        instructions: [
            "Make hollandaise sauce",
            "Toast English muffins",
            "Cook Canadian bacon",
            "Poach eggs",
            "Assemble and top with sauce",
            "Garnish with chives"
        ],
        cookingTime: 30,
        servings: 4,
        difficulty: "Hard",
        authorName: "Chef James",
        category: "breakfast"
    },
    {
        id: 15,
        title: "Beef Tacos",
        description: "Street-style tacos with seasoned beef and fresh toppings",
        image: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b",
        ingredients: [
            "Ground beef",
            "Corn tortillas",
            "White onion, diced",
            "Fresh cilantro",
            "Lime wedges",
            "Taco seasoning",
            "Salsa verde",
            "Queso fresco"
        ],
        instructions: [
            "Brown beef with seasonings",
            "Warm tortillas",
            "Assemble tacos with meat",
            "Top with onion and cilantro",
            "Add salsa and cheese",
            "Serve with lime wedges"
        ],
        cookingTime: 25,
        servings: 4,
        difficulty: "Easy",
        authorName: "Chef Carlos",
        category: "dinner"
    },
    {
        id: 16,
                title: "Mushroom Risotto",
                description: "Creamy Italian rice dish with wild mushrooms",
                image: "https://images.unsplash.com/photo-1476124369491-e7addf5db371",
        ingredients: [
            "Arborio rice",
            "Mixed mushrooms",
            "White wine",
            "Vegetable broth",
            "Parmesan cheese",
            "Butter",
            "Garlic and shallots",
            "Fresh thyme"
        ],
        instructions: [
            "Sauté mushrooms until golden",
            "Toast rice with aromatics",
            "Add wine and reduce",
            "Gradually add hot broth",
            "Stir until creamy",
            "Finish with cheese and butter"
        ],
                cookingTime: 45,
                servings: 4,
        difficulty: "Medium",
                authorName: "Chef Sofia",
                category: "dinner"
    },
    {
        id: 17,
        title: "Apple Pie",
        description: "Classic American dessert with flaky crust",
        image: "https://images.unsplash.com/photo-1568571780765-9276ac8b75a2",
        ingredients: [
            "Pie crust dough",
            "6 apples, sliced",
            "1 cup sugar",
            "Cinnamon",
            "Nutmeg",
            "Lemon juice",
            "Butter",
            "Egg wash"
        ],
        instructions: [
            "Roll out pie crusts",
            "Mix apples with sugar and spices",
            "Fill bottom crust",
            "Top with second crust",
            "Brush with egg wash",
            "Bake until golden"
        ],
        cookingTime: 75,
        servings: 8,
        difficulty: "Medium",
        authorName: "Chef Betty",
        category: "dessert"
    },
    {
        id: 18,
        title: "Sushi Rolls",
        description: "California rolls with crab, avocado, and cucumber",
        image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351",
        ingredients: [
            "Sushi rice",
            "Nori sheets",
            "Crab meat",
            "Avocado",
            "Cucumber",
            "Rice vinegar",
            "Sesame seeds",
            "Soy sauce"
        ],
        instructions: [
            "Prepare sushi rice",
            "Layer nori with rice",
            "Add fillings",
            "Roll tightly",
            "Cut into pieces",
            "Serve with soy sauce"
        ],
        cookingTime: 60,
        servings: 4,
        difficulty: "Hard",
        authorName: "Chef Kenji",
        category: "dinner"
    },
    {
        id: 19,
        title: "Granola Parfait",
        description: "Layered breakfast with yogurt, granola, and fresh fruit",
        image: "https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38",
        ingredients: [
            "Greek yogurt",
            "Homemade granola",
            "Mixed berries",
            "Honey",
            "Chia seeds",
            "Almonds",
            "Vanilla extract",
            "Mint leaves"
        ],
        instructions: [
            "Layer yogurt in glass",
            "Add granola layer",
            "Add fresh berries",
            "Drizzle with honey",
            "Repeat layers",
            "Top with nuts and seeds"
        ],
        cookingTime: 10,
        servings: 2,
        difficulty: "Easy",
        authorName: "Chef Emma",
        category: "breakfast"
    },
    {
        id: 20,
        title: "Pad Thai",
        description: "Classic Thai stir-fried rice noodles with shrimp",
        image: "https://images.unsplash.com/photo-1559314809-0d155014e29e",
        ingredients: [
            "Rice noodles",
            "Shrimp",
            "Tofu",
            "Bean sprouts",
            "Tamarind paste",
            "Fish sauce",
            "Palm sugar",
            "Peanuts"
        ],
        instructions: [
            "Soak noodles until tender",
            "Stir-fry shrimp and tofu",
            "Add noodles and sauce",
            "Toss with bean sprouts",
            "Add egg and cook",
            "Garnish with peanuts"
        ],
        cookingTime: 30,
        servings: 4,
        difficulty: "Medium",
        authorName: "Chef Supaporn",
        category: "dinner"
    },
    {
        id: 21,
        title: "Tiramisu",
        description: "Italian coffee-flavored dessert with mascarpone",
        image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9",
        ingredients: [
            "Ladyfinger cookies",
            "Mascarpone cheese",
            "Strong coffee",
            "Eggs",
            "Sugar",
            "Cocoa powder",
            "Marsala wine",
            "Vanilla extract"
        ],
        instructions: [
            "Make coffee and cool",
            "Beat egg yolks with sugar",
            "Fold in mascarpone",
            "Dip cookies in coffee",
            "Layer with cream",
            "Dust with cocoa"
        ],
        cookingTime: 30,
        servings: 8,
        difficulty: "Medium",
        authorName: "Chef Giuseppe",
        category: "dessert"
    },
    {
        id: 22,
        title: "Chicken Fajitas",
        description: "Sizzling Mexican dish with grilled chicken and peppers",
        image: "https://images.unsplash.com/photo-1534352956036-cd81e27dd615",
        ingredients: [
            "Chicken breast",
            "Bell peppers",
            "Onions",
            "Tortillas",
            "Fajita seasoning",
            "Lime",
            "Guacamole",
            "Sour cream"
        ],
        instructions: [
            "Slice chicken and vegetables",
            "Season chicken",
            "Grill until charred",
            "Cook peppers and onions",
            "Warm tortillas",
            "Serve with toppings"
        ],
        cookingTime: 30,
        servings: 4,
        difficulty: "Easy",
        authorName: "Chef Rosa",
                category: "dinner"
            }
        ];

// Debounce function to limit how often the search is performed
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Function to get unique cooking time ranges
function getCookingTimeRanges() {
    const times = recipes.map(recipe => recipe.cookingTime).sort((a, b) => a - b);
    const ranges = [
        { min: 0, max: 30, label: 'Quick (0-30 mins)' },
        { min: 31, max: 60, label: 'Medium (31-60 mins)' },
        { min: 61, max: 120, label: 'Long (1-2 hours)' },
        { min: 121, max: Infinity, label: 'Very Long (2+ hours)' }
    ];
    return ranges;
}

// Function to search and filter recipes
function searchRecipes(query, filters) {
    let results = recipes;
    
    // Apply search query filter
    if (query) {
        query = query.toLowerCase().trim();
        results = results.filter(recipe => {
            const searchableText = [
                recipe.title,
                recipe.description,
                recipe.category,
                recipe.difficulty,
                recipe.authorName,
                ...recipe.ingredients
            ].join(' ').toLowerCase();
            
            return searchableText.includes(query);
        });
    }
    
    // Apply category filter
    if (filters.category !== 'all') {
        results = results.filter(recipe => 
            recipe.category.toLowerCase() === filters.category.toLowerCase()
        );
    }

    // Apply cooking time filter
    if (filters.timeRange !== 'all') {
        const [min, max] = filters.timeRange.split('-').map(Number);
        results = results.filter(recipe => 
            recipe.cookingTime >= min && 
            (max === -1 ? true : recipe.cookingTime <= max)
        );
    }

    // Apply difficulty filter
    if (filters.difficulty !== 'all') {
        results = results.filter(recipe => 
            recipe.difficulty.toLowerCase() === filters.difficulty.toLowerCase()
        );
    }
    
    return results;
}

// Function to display recipes in grid
function displayRecipes(recipesToShow = recipes) {
    const container = document.querySelector('.recipe-grid');
    if (!container) return;

    if (recipesToShow.length === 0) {
        container.innerHTML = `
            <div class="no-results">
                <i class="fas fa-search"></i>
                <p>No recipes found. Try different search terms or filters.</p>
                </div>
            `;
            return;
        }

    container.innerHTML = recipesToShow.map(recipe => `
        <div class="recipe-card" data-category="${recipe.category}">
                <img src="${recipe.image}" alt="${recipe.title}" class="recipe-image">
                <div class="recipe-content">
                    <h3 class="recipe-title">${recipe.title}</h3>
                    <p class="recipe-description">${recipe.description}</p>
                
                    <div class="recipe-meta">
                        <div class="recipe-stats">
                            <span class="stat-item">
                                <i class="fas fa-clock"></i> ${recipe.cookingTime} mins
                            </span>
                            <span class="stat-item">
                                <i class="fas fa-utensils"></i> ${recipe.servings} servings
                            </span>
                        </div>
                        <span class="recipe-difficulty difficulty-${recipe.difficulty.toLowerCase()}">${recipe.difficulty}</span>
                    </div>

                    <div class="recipe-author">
                    <i class="fas fa-user-circle"></i>
                    <span class="author-name">By ${recipe.authorName}</span>
                    </div>

                    <div class="recipe-actions">
                        <button onclick="viewRecipe(${recipe.id})" class="btn-recipe btn-view">
                            <i class="fas fa-eye"></i> View Recipe
                        </button>
                        <button onclick="saveRecipe(${recipe.id})" class="btn-recipe btn-save">
                        <i class="fas fa-bookmark"></i> Save
                        </button>
                    </div>
                </div>
            </div>
        `).join('');

    // Update results count
    updateResultsCount(recipesToShow.length);
}

// Function to update results count
function updateResultsCount(count) {
    const resultsCount = document.querySelector('.results-count');
    if (resultsCount) {
        resultsCount.textContent = count > 0 
            ? `Found ${count} recipe${count !== 1 ? 's' : ''}`
            : 'No recipes found';
    }
}

// Function to handle search and filter
const handleSearchAndFilter = debounce(() => {
    const searchQuery = document.getElementById('recipe-search').value;
    const categoryFilter = document.getElementById('category-filter').value;
    const timeFilter = document.getElementById('time-filter').value;
    const difficultyFilter = document.getElementById('difficulty-filter').value;

    const filters = {
        category: categoryFilter,
        timeRange: timeFilter,
        difficulty: difficultyFilter
    };

    const filteredRecipes = searchRecipes(searchQuery, filters);
    displayRecipes(filteredRecipes);
}, 300);

// Function to view a single recipe
function viewRecipe(id) {
    const recipe = recipes.find(r => r.id === id);
    if (!recipe) return;

    const modal = document.createElement('div');
    modal.className = 'recipe-modal';
    modal.innerHTML = `
        <div class="recipe-modal-content">
            <span class="close-modal">&times;</span>
            <img src="${recipe.image}" alt="${recipe.title}" class="modal-image">
            <h2>${recipe.title}</h2>
            <p class="recipe-description">${recipe.description}</p>
            
            <div class="recipe-meta">
                <span><i class="fas fa-clock"></i> ${recipe.cookingTime} mins</span>
                <span><i class="fas fa-utensils"></i> ${recipe.servings} servings</span>
                <span><i class="fas fa-signal"></i> ${recipe.difficulty}</span>
                </div>

            <div class="recipe-sections">
                <div class="ingredients-section">
                        <h3>Ingredients</h3>
                    <ul>
                        ${recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
                        </ul>
                    </div>
                
                <div class="instructions-section">
                        <h3>Instructions</h3>
                    <ol>
                        ${recipe.instructions.map(step => `<li>${step}</li>`).join('')}
                        </ol>
                </div>
                    </div>
                </div>
            `;

    document.body.appendChild(modal);
    
    // Add modal styles dynamically
    const style = document.createElement('style');
    style.textContent = `
        .recipe-modal {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0,0,0,0.7);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 1000;
        }
        
        .recipe-modal-content {
            background-color: white;
            padding: 2rem;
            border-radius: 10px;
            max-width: 800px;
            width: 90%;
            max-height: 90vh;
            overflow-y: auto;
            position: relative;
        }
        
        .close-modal {
            position: absolute;
            right: 1rem;
            top: 1rem;
            font-size: 2rem;
            cursor: pointer;
            color: #333;
        }
        
        .modal-image {
            width: 100%;
            height: 300px;
            object-fit: cover;
            border-radius: 8px;
            margin-bottom: 1rem;
        }
        
        .recipe-sections {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 2rem;
            margin-top: 2rem;
        }
        
        @media (max-width: 768px) {
            .recipe-sections {
                grid-template-columns: 1fr;
            }
        }
        
        .recipe-modal h2 {
            color: #333;
            margin-bottom: 1rem;
        }
        
        .recipe-modal .recipe-meta {
            display: flex;
            gap: 1rem;
            margin-bottom: 1rem;
            color: #666;
        }
        
        .recipe-modal ul, .recipe-modal ol {
            padding-left: 1.5rem;
        }
        
        .recipe-modal li {
            margin-bottom: 0.5rem;
        }
    `;
    document.head.appendChild(style);

    // Close modal functionality
    const closeBtn = modal.querySelector('.close-modal');
    closeBtn.onclick = () => {
        document.body.removeChild(modal);
    };
    
    // Close on outside click
    modal.onclick = (e) => {
        if (e.target === modal) {
            document.body.removeChild(modal);
        }
    };
}

// Function to save recipe (just for demonstration)
function saveRecipe(id) {
    alert('Recipe saved to favorites!');
}

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
    // Create and insert search bar
    const searchContainer = document.createElement('div');
    searchContainer.className = 'search-container';
    searchContainer.innerHTML = `
        <div class="search-wrapper">
            <div class="search-bar">
                <i class="fas fa-search search-icon"></i>
                <input 
                    type="text" 
                    id="recipe-search" 
                    placeholder="Search recipes, ingredients, or cuisines..."
                    class="search-input"
                    autocomplete="off"
                >
            </div>
        </div>
        <button class="btn-search">
            <i class="fas fa-search"></i> Search
        </button>
        <div class="filter-group">
            <select id="category-filter" class="filter-select">
                <option value="all">All Categories</option>
                <option value="breakfast">Breakfast</option>
                <option value="lunch">Lunch</option>
                <option value="dinner">Dinner</option>
                <option value="dessert">Dessert</option>
            </select>
        </div>
        <div class="filter-group">
            <select id="difficulty-filter" class="filter-select">
                <option value="all">Any Difficulty</option>
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
            </select>
        </div>
        <div class="filter-group">
            <select id="time-filter" class="filter-select">
                <option value="all">Any Time</option>
                <option value="0-30">Quick (0-30 mins)</option>
                <option value="31-60">Medium (31-60 mins)</option>
                <option value="61-120">Long (1-2 hours)</option>
                <option value="121--1">Very Long (2+ hours)</option>
            </select>
        </div>
    `;

    // Insert search container before recipe grid
    const recipeGrid = document.querySelector('.recipe-grid');
    if (recipeGrid) {
        recipeGrid.parentNode.insertBefore(searchContainer, recipeGrid);
    }

    // Add event listeners
    const searchInput = document.getElementById('recipe-search');
    const categoryFilter = document.getElementById('category-filter');
    const difficultyFilter = document.getElementById('difficulty-filter');
    const timeFilter = document.getElementById('time-filter');

    // Add event listeners to search and filters
    [searchInput, categoryFilter, difficultyFilter, timeFilter].forEach(element => {
        if (element) {
            element.addEventListener('input', handleSearchAndFilter);
            element.addEventListener('change', handleSearchAndFilter);
        }
    });

    // Clear search on 'x' button click
    if (searchInput) {
        searchInput.addEventListener('search', handleSearchAndFilter);
    }

    // Initial display
    displayRecipes();
}); 