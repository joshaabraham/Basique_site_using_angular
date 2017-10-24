
var ninjasModule = angular.module('ninjasModule', ['ngRoute']);

ninjasModule.config(['$routeProvider', function($routeProvider){
$routeProvider.when('/Home',{
  templateUrl:'View/Content/Home/home.html'
}).when('/Messages',{
templateUrl:'View/Content/Messages/messages.html',
controller:'ninjaController'
}).when('/LoginForm',{
templateUrl:'View/Content/Forms/LoginForm.html',
  controller:'ninjaController'
}).otherwise({
  redirectTo:'/home'
});


}])



ninjasModule.controller('ninjaController', function($scope){

            $scope.messages = [
            {
              _id : '1',
              index : '1',
              guid : 'aaa-bbb-ccc',
              about : 'love and death',
              titre : 'Message 1',
              registered : 'Je suis le premier message'

            },
            {
              _id : '2',
              index : '2',
              guid : 'eee-ddd-fff',
              about : 'Moi et elle',
              titre : 'Message 2',
              registered : 'Je suis le second message'

            }];

});
