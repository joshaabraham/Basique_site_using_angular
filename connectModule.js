
(function(){



var app = angular.module('carnet', []);


/* A COMPLETER AVEC LES NOUVEAU FORMULAIRES  */
/*
app.config(['$routeProvider', function($routeProvider){
    $routeProvider.when('/Login',{
        templateUrl:'View/Content/Forms/Login/Login.html',
        controller:'connectUserCtrl'
    }).when('/RegisterForm',{
        templateUrl:'View/Content/Forms/RegisterForm.html',
       // contoller:'connectController'
    }).when('/ForgotMyPassword',{
  templateUrl:'View/Content/Forms/ConnectWith.html',

    }).when('/ConnectWith',{
        templateUrl:'View/Content/Forms/ConnectWith.html',
        //controller:''
      }).otherwise({
        redirectTo:'/Login'
    });

}]);
*/


app.controller('productCtrl', function(){

this.personnes = individu;

});

var individu = {
  name = "Remi DUplan",
  age = 35,
  email : 'duplan.remi@gmail.com',
  address : '52 rue de la galere 5412 Marseille'
};



/*
var personnes =   [
    {
      "_id": "59ecf477f36e76df216d73bb",
      "index": 0,
      "guid": "3e2b871c-ad53-49ff-8abc-f3a11f1409fc",
      "isActive": false,
      "balance": "$1,231.23",
      "picture": "http://placehold.it/32x32",
      "age": 32,
      "eyeColor": "green",
      "name": "Ana Parks",
      "gender": "female",
      "company": "ZILLAR",
      "email": "anaparks@zillar.com",
      "phone": "+1 (862) 502-3351",
      "address": "109 Chestnut Avenue, Veguita, Montana, 7098",
      "about": "Excepteur non irure enim excepteur ad duis adipisicing id adipisicing id amet culpa. Sint id sunt adipisicing incididunt ipsum aute dolore aliqua adipisicing nostrud. Duis duis nostrud quis duis officia commodo anim incididunt magna nostrud proident aliqua.\r\n",
      "registered": "2014-12-11T02:44:29 +05:00",
      "latitude": 23.48993,
      "longitude": -142.029083,
      "tags": [
        "minim",
        "aliqua",
        "in",
        "ad",
        "voluptate",
        "labore",
        "minim"
      ],
      "friends": [
        {
          "id": 0,
          "name": "Estella Ortega"
        },
        {
          "id": 1,
          "name": "Johnnie Vaughan"
        },
        {
          "id": 2,
          "name": "Doris Gillespie"
        }
      ],
      "greeting": "Hello, Ana Parks! You have 6 unread messages.",
      "favoriteFruit": "banana"
    },
    {
      "_id": "59ecf4777bf6e6d281b78f83",
      "index": 1,
      "guid": "2c6937b6-6366-4198-a6f6-ecaf7067f5ee",
      "isActive": false,
      "balance": "$3,014.92",
      "picture": "http://placehold.it/32x32",
      "age": 38,
      "eyeColor": "blue",
      "name": "Jessie Carroll",
      "gender": "female",
      "company": "HAWKSTER",
      "email": "jessiecarroll@hawkster.com",
      "phone": "+1 (956) 514-2853",
      "address": "969 Hanover Place, Dubois, South Carolina, 8047",
      "about": "Id veniam elit tempor voluptate esse magna cillum consectetur. Commodo eiusmod ex non reprehenderit do exercitation officia commodo magna. Amet aliquip aliquip irure culpa commodo eu ut.\r\n",
      "registered": "2014-11-12T11:10:53 +05:00",
      "latitude": -78.029195,
      "longitude": 80.972859,
      "tags": [
        "minim",
        "ea",
        "consectetur",
        "consectetur",
        "aliquip",
        "Lorem",
        "et"
      ],
      "friends": [
        {
          "id": 0,
          "name": "Suzette Roth"
        },
        {
          "id": 1,
          "name": "Lelia Mclaughlin"
        },
        {
          "id": 2,
          "name": "Olivia Daniels"
        }
      ],
      "greeting": "Hello, Jessie Carroll! You have 6 unread messages.",
      "favoriteFruit": "strawberry"
    },
    {
      "_id": "59ecf4772ac8b425c2a948d8",
      "index": 2,
      "guid": "6e5e2c85-d8f7-4e17-b312-5a5d08c1998f",
      "isActive": false,
      "balance": "$1,387.91",
      "picture": "http://placehold.it/32x32",
      "age": 35,
      "eyeColor": "brown",
      "name": "Haley Landry",
      "gender": "female",
      "company": "PYRAMIS",
      "email": "haleylandry@pyramis.com",
      "phone": "+1 (851) 414-2626",
      "address": "229 Rogers Avenue, Talpa, Vermont, 5051",
      "about": "Cillum excepteur officia anim eiusmod sint fugiat tempor cillum consectetur magna Lorem. Ex Lorem excepteur tempor culpa esse ipsum elit sint officia. Pariatur dolor dolor est velit aliqua velit dolore deserunt. Non est eu occaecat culpa.\r\n",
      "registered": "2014-10-09T12:31:54 +04:00",
      "latitude": -19.006037,
      "longitude": 20.446766,
      "tags": [
        "nulla",
        "id",
        "ad",
        "tempor",
        "minim",
        "exercitation",
        "ut"
      ],
      "friends": [
        {
          "id": 0,
          "name": "Mooney Hampton"
        },
        {
          "id": 1,
          "name": "Gross Simpson"
        },
        {
          "id": 2,
          "name": "Colleen Morgan"
        }
      ],
      "greeting": "Hello, Haley Landry! You have 2 unread messages.",
      "favoriteFruit": "banana"
    },
    {
      "_id": "59ecf4770d1e3e5e31d922b3",
      "index": 3,
      "guid": "97bcf918-18ac-4dd9-bde9-f6da0e457fab",
      "isActive": true,
      "balance": "$3,701.29",
      "picture": "http://placehold.it/32x32",
      "age": 40,
      "eyeColor": "blue",
      "name": "Lolita Mcclain",
      "gender": "female",
      "company": "ADORNICA",
      "email": "lolitamcclain@adornica.com",
      "phone": "+1 (968) 526-2588",
      "address": "846 Bayview Place, Chical, Alaska, 1954",
      "about": "Aliquip excepteur voluptate aliqua Lorem. Ex nisi enim labore nisi quis ut exercitation sunt mollit minim eiusmod aliqua cupidatat. Labore occaecat exercitation quis fugiat amet magna consequat elit consequat. Non aliquip eu est reprehenderit ad.\r\n",
      "registered": "2017-03-16T10:02:26 +04:00",
      "latitude": 40.315149,
      "longitude": 133.885231,
      "tags": [
        "id",
        "magna",
        "duis",
        "voluptate",
        "dolor",
        "qui",
        "aliquip"
      ],
      "friends": [
        {
          "id": 0,
          "name": "Kristine Patterson"
        },
        {
          "id": 1,
          "name": "Kent Powell"
        },
        {
          "id": 2,
          "name": "Murphy Eaton"
        }
      ],
      "greeting": "Hello, Lolita Mcclain! You have 6 unread messages.",
      "favoriteFruit": "strawberry"
    },
    {
      "_id": "59ecf477c99ac537317c7843",
      "index": 4,
      "guid": "5ab90475-5417-4529-aa9c-4949fb8ab2a7",
      "isActive": true,
      "balance": "$2,098.35",
      "picture": "http://placehold.it/32x32",
      "age": 25,
      "eyeColor": "green",
      "name": "Jenna Ryan",
      "gender": "female",
      "company": "CEPRENE",
      "email": "jennaryan@ceprene.com",
      "phone": "+1 (934) 598-2920",
      "address": "346 Adams Street, Springville, Washington, 8647",
      "about": "Sit duis nostrud et veniam esse occaecat consectetur sit occaecat cupidatat. Proident exercitation excepteur id voluptate aliqua. Laborum non ipsum labore in velit dolore do consequat ex sint est. Elit excepteur dolore adipisicing minim proident anim eiusmod sit id occaecat mollit reprehenderit. Non non fugiat exercitation duis. Ipsum duis qui qui officia tempor adipisicing dolor eu sunt amet.\r\n",
      "registered": "2016-07-18T09:07:33 +04:00",
      "latitude": 62.081263,
      "longitude": -4.337298,
      "tags": [
        "aute",
        "nostrud",
        "tempor",
        "nostrud",
        "nulla",
        "Lorem",
        "elit"
      ],
      "friends": [
        {
          "id": 0,
          "name": "Ellis Odom"
        },
        {
          "id": 1,
          "name": "Page Reed"
        },
        {
          "id": 2,
          "name": "Frazier Howe"
        }
      ],
      "greeting": "Hello, Jenna Ryan! You have 8 unread messages.",
      "favoriteFruit": "banana"
    }
  ];



});
*/

})();
