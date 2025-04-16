app.service('authService', ['$http', '$q', '$rootScope', function($http, $q, $rootScope) {
    var service = {
        isAuthenticated: function() {
            return !!localStorage.getItem('token');
        },

        login: function(credentials) {
            return $http.post('/api/auth/login', credentials)
                .then(function(response) {
                    localStorage.setItem('token', response.data.token);
                    $rootScope.currentUser = response.data.user;
                    return response.data;
                });
        },

        signup: function(userData) {
            return $http.post('/api/auth/signup', userData)
                .then(function(response) {
                    localStorage.setItem('token', response.data.token);
                    $rootScope.currentUser = response.data.user;
                    return response.data;
                });
        },

        logout: function() {
            localStorage.removeItem('token');
            $rootScope.currentUser = null;
        },

        getCurrentUser: function() {
            if (!this.isAuthenticated()) {
                return $q.reject('No user logged in');
            }
            return $http.get('/api/auth/user')
                .then(function(response) {
                    $rootScope.currentUser = response.data;
                    return response.data;
                });
        }
    };

    return service;
}]); 