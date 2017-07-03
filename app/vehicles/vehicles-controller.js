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