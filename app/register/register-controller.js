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