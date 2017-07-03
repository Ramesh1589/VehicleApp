(function(){
    angular.module("components",[]);
})();
(function () {
    angular.module("components")
        .filter("rangeFilter", [function () {
            return function (data, filteringCriteria) {
                var newArray = [ ];
                
                if ( filteringCriteria && filteringCriteria.min && filteringCriteria.max) {
                    _.each(data, function (item) {
                        if (item.Price >= filteringCriteria.min && item.Price < filteringCriteria.max) {
                            newArray.push(item);
                        }

                    });

                    return newArray;
                }
                else{
                    return data;
                }
            };
    }])
})();

(function () {
    angular.module("header")
        .controller("headerCtrl", ["$scope", "$translate",  function ($scope, $translate) {
         
            $scope.vehicleCount = 0;
            $scope.total = 0;

            $scope.$on("VEHICLE-ADDED", function (event, args) {
                $scope.total+=args.veh.Price;
               
                $scope.vehicleCount++;
            });
            
            $scope.$on("VEHICLE-REMOVED", function (event, args) {
                $scope.total-=args.veh.Price;
                $scope.vehicleCount--;
            });
        
            $scope.changeLagunage = function(type){
            $translate.use(type);
        }
}]);


})();

angular.module("header",[]);

angular.module("home",[]);

angular.module("login",[]);
(function () {
    'use strict'
    //code goes here.
    angular.module("register").controller("registerCtrl", function ($scope, $state) {
        $scope.userDetails = {
            terms: false
        };
        
         $scope.countries = [{
                        "key": "IN",
                        "value": "India"
                    },
                    {
                        "key": "US",
                        "value": "United States"
                    }];
        
                var states = [{
                        "countryCode": "IN",
                        "key": "TG",
                        "value": "Telangana"
                    },
                    {
                        "countryCode": "IN",
                        "key": "AP",
                        "value": "Andhra Pradesh"
                    },
                      {
                        "countryCode": "IN",
                        "key": "MH",
                        "value": "Maharashatra"
                    },          
                    {
                        "countryCode": "US",
                        "key": "TX",
                        "value": "Texas"
                    },
                              {
                        "countryCode": "US",
                        "key": "LA",
                        "value": "Losss Angilies"
                    },
                              
                              {
                        "countryCode": "US",
                        "key": "NY",
                        "value": "New York"
                    }];
        
          $scope.states = [{
                        "countryCode": "IN",
                        "key": "TG",
                        "value": "Telangana"
                    },
                    {
                        "countryCode": "IN",
                        "key": "AP",
                        "value": "Andhra Pradesh"
                    },
                     {
                        "countryCode": "IN",
                        "key": "MH",
                        "value": "Maharashatra"
                    },       
                    {
                        "countryCode": "US",
                        "key": "TX",
                        "value": "Texas"
                    },
                           {
                        "countryCode": "US",
                        "key": "LA",
                        "value": "Loss Angilie"
                    },
                           
                           {
                        "countryCode": "US",
                        "key": "NY",
                        "value": "New York"
                    }];
            
        $scope.loadStates = function(){
            console.log($scope.selectedCountry);
            
            $scope.stateList = [ ]; 
            
            angular.forEach(states,function(item){
                if(item.countryCode === $scope.selectedCountry.key){
                   $scope.stateList.push(item); 
                }
            });
            console.log($scope.stateList);
        };
      
        $scope.registerUser = function () {
            console.log($scope.userDetails);
          
            //Navigating from one pagr to another page using $state.go()
            $state.go("login", {
                userDetails: $scope.userDetails
            });
            
        };
    });
})();

angular.module("register",[]);
(function(){
    angular.module("vehicles")
    .controller("vehicleCtrl",["$scope","vehicleSvc","$rootScope",
                           function($scope,vehicleSvc, $rootScope){
    
                     
    vehicleSvc.getVehicles()
    .then(function(response){
        $scope.vehicles = response.data.vehicles;
    })
    .catch(function(response){
        $scope.showError=response;
    });
                               
                               
     $scope.changeSort = function () {
                    if ($scope.sortBy == "Price") {
                        $scope.sortBy = "=Price"
                    } else {
                        $scope.sortBy = "-Price"
                    }
                  
     };                           
    
     $scope.filterRange = [
                           {
                        range: "between 100000 to 300000",
                        min: 100000,
                        max: 300000
                },
                           {
                        range: "between 300000 to 500000",
                        min: 300000,
                        max: 500000
                },
                           {
                        range: "between 800000 to 1200000",
                        min: 800000,
                        max: 1200000
                },
                           {
                        range: "between 1000000 to 1500000",
                        min: 1000000,
                        max: 1500000
                }, 
                           {
                        range: "between 1000000 to 9900000",
                        min: 1000000,
                        max: 9900000
                }
                          ];  
        
             $scope.selectVehicle = function (vehicle) {
                            vehicle.isSelected = true;
                            $rootScope.$broadcast("VEHICLE-ADDED", {
                                veh: vehicle
                            });
                        };
                        $scope.removeVehicle = function (vehicle) {
                            vehicle.isSelected = false;
                            $rootScope.$broadcast("VEHICLE-REMOVED", {
                                veh: vehicle
                            });
                        };

                               
                               
                $scope.$watch("searchByModel", function (newVal, oldVal) {
                    console.log("Old Value is: " + oldVal);
                    console.log("New Value is: " + newVal)
                });

                setTimeout(function () {
                    $scope.searchByModel="WagonR";
                    $scope.$apply();
                },5000);                           
    
        
    }]);
})();
(function(){
    angular.module("vehicles")
    .service("vehicleSvc",["$http",
                           function($http){
        this.getVehicles=function(){
         return  $http.get("app/api/vehicles.json");
           };
                               
                               
    }]);
})();

angular.module("vehicles",[]);