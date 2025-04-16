// Search functionality for recipes
let currentPage = 1;
const recipesPerPage = 9;

function searchRecipes() {
    const query = document.getElementById('searchQuery').value.toLowerCase();
    const sortBy = document.getElementById('sortBy').value;
    const searchResults = document.getElementById('searchResults');
    
    // Get recipes from localStorage
    let recipes = JSON.parse(localStorage.getItem('recipes')) || [];
    
    // Filter recipes based on search query
    let filteredRecipes = recipes.filter(recipe => {
        return recipe.title.toLowerCase().includes(query) ||
               recipe.description.toLowerCase().includes(query) ||
               recipe.ingredients.some(ingredient => ingredient.toLowerCase().includes(query)) ||
               recipe.category.toLowerCase().includes(query);
    });

    // Sort recipes based on selected option
    filteredRecipes = sortRecipes(filteredRecipes, sortBy);

    // Show/hide search results section
    searchResults.style.display = filteredRecipes.length > 0 ? 'block' : 'none';

    // Update results count
    const resultsCount = searchResults.querySelector('h4');
    resultsCount.textContent = `${filteredRecipes.length} Results for "${query}"`;

    // Display recipes
    displaySearchResults(filteredRecipes);
    updatePagination(filteredRecipes.length);
}

function sortRecipes(recipes, sortBy) {
    switch(sortBy) {
        case 'recent':
            return recipes.sort((a, b) => b.id - a.id);
        case 'popular':
            return recipes.sort((a, b) => (b.reviewCount || 0) - (a.reviewCount || 0));
        case 'rating':
            return recipes.sort((a, b) => (b.rating || 0) - (a.rating || 0));
        default: // relevance - keep original order
            return recipes;
    }
}

function displaySearchResults(recipes) {
    const container = document.querySelector('#searchResults .recipe-grid');
    const startIndex = (currentPage - 1) * recipesPerPage;
    const endIndex = startIndex + recipesPerPage;
    const recipesToShow = recipes.slice(startIndex, endIndex);

    container.innerHTML = recipesToShow.map(recipe => `
        <div class="recipe-card">
            <img src="${recipe.image}" class="card-img-top" alt="${recipe.title}" 
                 style="height: 200px; object-fit: cover;">
            <div class="card-body">
                <h5 class="card-title">${recipe.title}</h5>
                <p class="card-text">${recipe.description.substring(0, 100)}...</p>
                <div class="recipe-meta mb-2">
                    <span class="badge bg-light text-dark me-2">
                        <i class="fas fa-clock"></i> ${recipe.cookingTime} min
                    </span>
                    <span class="badge bg-light text-dark me-2">
                        <i class="fas fa-signal"></i> ${recipe.difficulty}
                    </span>
                    <span class="badge bg-light text-dark">
                        <i class="fas fa-utensils"></i> ${recipe.category}
                    </span>
                </div>
                <div class="d-flex justify-content-between align-items-center">
                    <small class="text-muted">By ${recipe.authorName}</small>
                    <a href="views/recipe-detail.html?id=${recipe.id}" class="btn btn-primary btn-sm">View Recipe</a>
                </div>
            </div>
        </div>
    `).join('');
}

function updatePagination(totalRecipes) {
    const totalPages = Math.ceil(totalRecipes / recipesPerPage);
    const pagination = document.querySelector('#searchResults .pagination');
    const pageItems = [];

    // Previous button
    pageItems.push(`
        <li class="page-item ${currentPage === 1 ? 'disabled' : ''}">
            <a class="page-link" href="#" onclick="changePage(${currentPage - 1}); return false;">Previous</a>
        </li>
    `);

    // Page numbers
    for (let i = 1; i <= totalPages; i++) {
        pageItems.push(`
            <li class="page-item ${currentPage === i ? 'active' : ''}">
                <a class="page-link" href="#" onclick="changePage(${i}); return false;">${i}</a>
            </li>
        `);
    }

    // Next button
    pageItems.push(`
        <li class="page-item ${currentPage === totalPages ? 'disabled' : ''}">
            <a class="page-link" href="#" onclick="changePage(${currentPage + 1}); return false;">Next</a>
        </li>
    `);

    pagination.innerHTML = pageItems.join('');
}

function changePage(page) {
    currentPage = page;
    searchRecipes();
}

// Add event listeners
document.addEventListener('DOMContentLoaded', function() {
    // Add input event listener for real-time search
    const searchInput = document.getElementById('searchQuery');
    let debounceTimer;
    
    searchInput.addEventListener('input', function() {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(searchRecipes, 300); // Debounce search for better performance
    });

    // Add change event listener for sort select
    document.getElementById('sortBy').addEventListener('change', searchRecipes);
}); 