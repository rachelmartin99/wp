// js/add-recipe.js

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('recipeForm');
    
    // Handle form submission
    form.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        // Get all form values
        const formData = {
            title: document.getElementById('title').value,
            description: document.getElementById('description').value,
            category: document.getElementById('category').value,
            cookingTime: parseInt(document.getElementById('cookingTime').value),
            servings: parseInt(document.getElementById('servings').value),
            difficulty: document.getElementById('difficulty').value,
            chef: document.getElementById('chef').value || 'Anonymous Chef',
            imageUrl: document.getElementById('imageUrl').value || 'https://via.placeholder.com/300x200?text=No+Image',
            ingredients: Array.from(document.getElementsByName('ingredients[]'))
                .map(input => input.value)
                .filter(value => value.trim() !== ''),
            instructions: Array.from(document.getElementsByName('instructions[]'))
                .map(input => input.value)
                .filter(value => value.trim() !== '')
        };

        try {
            // Send data to server
            const response = await fetch('http://localhost:3000/api/recipes/add', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });

            const result = await response.json();

            if (response.ok) {
                // Show success message
                showAlert('Recipe added successfully!', 'success');
                // Reset form
                form.reset();
                // Redirect to recipes page after 2 seconds
                setTimeout(() => {
                    window.location.href = 'recipes.html';
                }, 2000);
            } else {
                throw new Error(result.error || 'Failed to add recipe');
            }
        } catch (error) {
            showAlert(error.message, 'error');
        }
    });
});

// Function to add new ingredient input
function addIngredient() {
    const ingredientsList = document.getElementById('ingredientsList');
    const newIngredient = document.createElement('div');
    newIngredient.className = 'ingredient-item';
    newIngredient.innerHTML = `
        <input type="text" class="form-control" name="ingredients[]" placeholder="Enter ingredient" required>
        <button type="button" class="btn-remove-item" onclick="removeItem(this)">
            <i class="fas fa-times"></i>
        </button>
    `;
    ingredientsList.appendChild(newIngredient);
}

// Function to add new instruction input
function addInstruction() {
    const instructionsList = document.getElementById('instructionsList');
    const newInstruction = document.createElement('div');
    newInstruction.className = 'instruction-item';
    newInstruction.innerHTML = `
        <textarea class="form-control" name="instructions[]" placeholder="Enter instruction step" required></textarea>
        <button type="button" class="btn-remove-item" onclick="removeItem(this)">
            <i class="fas fa-times"></i>
        </button>
    `;
    instructionsList.appendChild(newInstruction);
}

// Function to remove ingredient or instruction item
function removeItem(button) {
    const item = button.parentElement;
    const list = item.parentElement;
    if (list.children.length > 1) {
        list.removeChild(item);
    } else {
        showAlert('You must have at least one item', 'warning');
    }
}

// Function to show alerts
function showAlert(message, type) {
    const alertDiv = document.createElement('div');
    alertDiv.className = `alert alert-${type} alert-dismissible fade show`;
    alertDiv.role = 'alert';
    alertDiv.innerHTML = `
        ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    `;
    
    const container = document.querySelector('.add-recipe-container');
    container.insertBefore(alertDiv, container.firstChild);

    // Auto dismiss after 3 seconds
    setTimeout(() => {
        alertDiv.remove();
    }, 3000);
}