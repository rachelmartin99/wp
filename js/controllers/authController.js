app.controller('AuthController', function($scope, $location, authService) {
    $scope.user = {
        email: '',
        password: ''
    };

    $scope.login = function() {
        authService.login($scope.user)
            .then(function(response) {
                $scope.$root.isAuthenticated = true;
                $location.path('/recipes');
            })
            .catch(function(error) {
                $scope.error = 'Invalid credentials';
            });
    };

    $scope.signup = function() {
        authService.signup($scope.user)
            .then(function(response) {
                $location.path('/');
            })
            .catch(function(error) {
                $scope.error = 'Signup failed';
            });
    };
}); 