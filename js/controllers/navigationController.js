app.controller('NavigationController', ['$scope', '$location', 'authService', 
    function($scope, $location, authService) {
        
    $scope.isActive = function(route) {
        return route === $location.path();
    };

    $scope.logout = function() {
        authService.logout();
        $location.path('/login');
    };
}]); 