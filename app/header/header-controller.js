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
