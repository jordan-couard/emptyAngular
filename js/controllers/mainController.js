// MAIN CONTROLLER
angular.module('app')
    .controller('mainController', function($scope) {
        $scope.tabs = [];
        var ligne;

        $scope.firstName = '';
        $scope.lastName = '';
        $scope.mail = '';


        $scope.add = function() {
            console.log('coucou');
            ligne = {
                firstName: $scope.firstName,
                lastName: $scope.lastName,
                mail: $scope.mail
            };


            $scope.tabs.push(ligne);
            console.log($scope.tabs);
        };
    });
