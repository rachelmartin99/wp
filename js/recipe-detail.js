document.addEventListener('DOMContentLoaded', function() {
    // Get recipe ID from URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const recipeId = parseInt(urlParams.get('id'));

    if (!recipeId) {
        showError('Recipe ID not found');
        return;
    }

    // Get recipes from localStorage
    try {
        const recipesJson = localStorage.getItem('recipes');
        if (!recipesJson) {
            showError('No recipes found');
            return;
        }

        const recipes = JSON.parse(recipesJson);
        const recipe = recipes.find(r => r.id === recipeId);

        if (!recipe) {
            showError('Recipe not found');
            return;
        }

        displayRecipe(recipe);
    } catch (error) {
        console.error('Error loading recipe:', error);
        showError('Error loading recipe data');
    }
});

function showError(message) {
    document.getElementById('recipe-detail').innerHTML = `
        <div class="alert alert-danger" role="alert">
            <i class="fas fa-exclamation-circle"></i>
            ${message}. 
            <a href="./recipes.html" class="alert-link">Return to recipes</a>
        </div>
    `;
}

function displayRecipe(recipe) {
    // Update page title
    document.title = `${recipe.title} - Recipe Portal`;

    // Display recipe details
    document.getElementById('recipe-detail').innerHTML = `
        <div class="recipe-header">
            <img src="${recipe.image}" alt="${recipe.title}" class="recipe-image" onerror="this.src='https://via.placeholder.com/800x400?text=Recipe+Image'">
            <h1 class="recipe-title">${recipe.title}</h1>
            <div class="recipe-meta">
                <span class="meta-item">
                    <i class="fas fa-clock"></i> ${recipe.cookingTime} minutes
                </span>
                <span class="meta-item">
                    <i class="fas fa-utensils"></i> ${recipe.servings} servings
                </span>
                <span class="meta-item">
                    <i class="fas fa-user"></i> ${recipe.authorName}
                </span>
                <span class="meta-item">
                    <i class="fas fa-tag"></i> ${recipe.category}
                </span>
                <span class="difficulty-badge difficulty-${recipe.difficulty.toLowerCase()}">
                    <i class="fas fa-signal"></i> ${recipe.difficulty}
                </span>
            </div>
            <p class="recipe-description">${recipe.description}</p>
        </div>

        <div class="row">
            <div class="col-md-4">
                <div class="card">
                    <div class="card-body">
                        <h3 class="card-title">
                            <i class="fas fa-list"></i> Ingredients
                        </h3>
                        <ul class="ingredients-list">
                            ${recipe.ingredients.map(ingredient => `
                                <li>
                                    <i class="fas fa-check"></i>
                                    ${ingredient}
                                </li>
                            `).join('')}
                        </ul>
                    </div>
                </div>
            </div>
            <div class="col-md-8">
                <div class="card">
                    <div class="card-body">
                        <h3 class="card-title">
                            <i class="fas fa-tasks"></i> Instructions
                        </h3>
                        <ol class="instructions-list">
                            ${recipe.instructions.map(instruction => `
                                <li>${instruction}</li>
                            `).join('')}
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    `;
} 