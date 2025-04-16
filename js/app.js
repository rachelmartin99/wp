var app = angular.module('recipePortal', ['ngRoute']);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    // Enable HTML5 mode for clean URLs
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: true
    });

    $routeProvider
        // Public routes
        .when('/', {
            templateUrl: 'views/home.html',
            controller: 'HomeController'
        })
        .when('/login', {
            templateUrl: 'views/auth/login.html',
            controller: 'AuthController',
            resolve: {
                // Redirect to dashboard if already logged in
                isGuest: ['authService', '$location', function(authService, $location) {
                    if (authService.isAuthenticated()) {
                        $location.path('/dashboard');
                        return false;
                    }
                    return true;
                }]
            }
        })
        .when('/signup', {
            templateUrl: 'views/auth/signup.html',
            controller: 'AuthController',
            resolve: {
                // Redirect to dashboard if already logged in
                isGuest: ['authService', '$location', function(authService, $location) {
                    if (authService.isAuthenticated()) {
                        $location.path('/dashboard');
                        return false;
                    }
                    return true;
                }]
            }
        })

        // Protected routes
        .when('/dashboard', {
            templateUrl: 'views/dashboard/index.html',
            controller: 'DashboardController',
            resolve: {
                auth: ['authGuard', function(authGuard) {
                    return authGuard.checkAuth();
                }]
            }
        })
        .when('/recipes', {
            templateUrl: 'views/recipes/list.html',
            controller: 'RecipeListController',
            resolve: {
                auth: ['authGuard', function(authGuard) {
                    return authGuard.checkAuth();
                }],
                recipes: ['recipeService', function(recipeService) {
                    return recipeService.getAllRecipes();
                }]
            }
        })
        .when('/recipes/new', {
            templateUrl: 'views/recipes/form.html',
            controller: 'RecipeFormController',
            resolve: {
                auth: ['authGuard', function(authGuard) {
                    return authGuard.checkAuth();
                }]
            }
        })
        .when('/recipes/:id', {
            templateUrl: 'views/recipes/detail.html',
            controller: 'RecipeDetailController',
            resolve: {
                recipe: ['$route', 'recipeService', function($route, recipeService) {
                    return recipeService.getRecipeById($route.current.params.id);
                }]
            }
        })
        .when('/recipes/:id/edit', {
            templateUrl: 'views/recipes/form.html',
            controller: 'RecipeFormController',
            resolve: {
                auth: ['authGuard', function(authGuard) {
                    return authGuard.checkAuth();
                }],
                recipe: ['$route', 'recipeService', function($route, recipeService) {
                    return recipeService.getRecipeById($route.current.params.id);
                }]
            }
        })
        .when('/profile', {
            templateUrl: 'views/profile/index.html',
            controller: 'ProfileController',
            resolve: {
                auth: ['authGuard', function(authGuard) {
                    return authGuard.checkAuth();
                }],
                userProfile: ['profileService', function(profileService) {
                    return profileService.getUserProfile();
                }]
            }
        })
        .when('/profile/edit', {
            templateUrl: 'views/profile/edit.html',
            controller: 'ProfileEditController',
            resolve: {
                auth: ['authGuard', function(authGuard) {
                    return authGuard.checkAuth();
                }],
                userProfile: ['profileService', function(profileService) {
                    return profileService.getUserProfile();
                }]
            }
        })
        .when('/search', {
            templateUrl: 'views/search-results.html',
            controller: 'SearchController'
        })
        .otherwise({
            redirectTo: '/'
        });
}]);

// Auth Guard Service
app.factory('authGuard', ['$q', 'authService', '$location', function($q, authService, $location) {
    return {
        checkAuth: function() {
            if (!authService.isAuthenticated()) {
                $location.path('/login');
                return $q.reject('Not authenticated');
            }
            return $q.resolve();
        }
    };
}]);

// Global error handler
app.run(['$rootScope', '$location', 'authService', function($rootScope, $location, authService) {
    $rootScope.$on('$routeChangeError', function(event, current, previous, rejection) {
        if (rejection === 'Not authenticated') {
            $location.path('/login');
        }
    });

    // Store current route for redirect after login
    $rootScope.$on('$routeChangeStart', function(event, next, current) {
        if (next.requireAuth && !authService.isAuthenticated()) {
            $rootScope.redirectTo = $location.path();
        }
    });

    // Logout handler
    $rootScope.logout = function($event) {
        if ($event) {
            $event.preventDefault();
        }
        authService.logout();
        $location.path('/login');
    };
}]); 