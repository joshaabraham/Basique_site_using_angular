/*

(function (){
'use strict';

angular
        .module('connectModule')
        .controller('LoginController', LoginController);

    LoginController.$inject = ['$location', 'AuthenticationService', 'FlashService'];
    function LoginController($location, AuthenticationService, FlashService) {
        var vm = this;

        vm.login = login;

        (function initController() {
            // reset login status
            AuthenticationService.ClearCredentials();
        })();

        function login() {
            vm.dataLoading = true;
            AuthenticationService.Login(vm.username, vm.password, function (response) {
                if (response.success) {
                    AuthenticationService.SetCredentials(vm.username, vm.password);
                    $location.path('/');
                } else {
                    FlashService.Error(response.message);
                    vm.dataLoading = false;
                }
            });
        };
    }

})();
*/
/*
connectModule.controller('loginController', function($scope, $location){

    $scope.submit = function(){
          var email = $scope.email;
          var password = $scope.password;

alert("1");

          if($scope.email == 'admin@admin.com' && $scope.password == '123'){

            alert("2");
            $location.path('main.html');

            alert("3");
          }
          else{
            alert("4");
            $location.path('/LoginForm');
              alert("5");

          }

    };


});

*/
