(function(){
    angular.module("vehicles")
    .service("vehicleSvc",["$http",
                           function($http){
        this.getVehicles=function(){
         return  $http.get("app/api/vehicles.json");
           };
                               
                               
    }]);
})();