app.controller('RecipeController', function($scope, recipeService) {
    $scope.recipes = [];
    $scope.newRecipe = {};
    $scope.editMode = false;

    // Get all recipes
    $scope.getAllRecipes = function() {
        recipeService.getRecipes()
            .then(function(response) {
                $scope.recipes = response;
            });
    };

    // Add new recipe
    $scope.addRecipe = function() {
        recipeService.addRecipe($scope.newRecipe)
            .then(function(response) {
                $scope.recipes.push(response);
                $scope.newRecipe = {};
            });
    };

    // Delete recipe
    $scope.deleteRecipe = function(id) {
        recipeService.deleteRecipe(id)
            .then(function() {
                $scope.recipes = $scope.recipes.filter(recipe => recipe.id !== id);
            });
    };

    // Edit recipe
    $scope.editRecipe = function(recipe) {
        $scope.editMode = true;
        $scope.newRecipe = angular.copy(recipe);
    };

    // Update recipe
    $scope.updateRecipe = function() {
        recipeService.updateRecipe($scope.newRecipe)
            .then(function(response) {
                const index = $scope.recipes.findIndex(r => r.id === $scope.newRecipe.id);
                $scope.recipes[index] = response;
                $scope.newRecipe = {};
                $scope.editMode = false;
            });
    };

    // Initialize
    $scope.getAllRecipes();
}); 