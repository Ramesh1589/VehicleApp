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
