app.service('recipeService', ['$http', function($http) {
    const API_URL = 'http://localhost:3000/api';

    return {
        getAllRecipes: function() {
            return $http.get(`${API_URL}/recipes`)
                .then(response => response.data);
        },

        getRecipeById: function(id) {
            return $http.get(`${API_URL}/recipes/${id}`)
                .then(response => response.data);
        },

        createRecipe: function(recipe) {
            return $http.post(`${API_URL}/recipes`, recipe)
                .then(response => response.data);
        },

        updateRecipe: function(id, recipe) {
            return $http.put(`${API_URL}/recipes/${id}`, recipe)
                .then(response => response.data);
        },

        deleteRecipe: function(id) {
            return $http.delete(`${API_URL}/recipes/${id}`);
        }
    };
}]); 