angular.module('Data')
    .service('MenuDataService', MenuDataService);

MenuDataService.$inject = ['$http', 'menuApiUrlBase'];
function MenuDataService($http, menuApiUrlBase) {
    this.getAllCategories = function() {
        return $http({
                method: 'GET',
                url: menuApiUrlBase + '/categories.json'
            })
            .then(function (results) {
                return results.data;
            });
    }

    this.getItemsForCategory = function(categoryShortName) {
        return $http({
                method: 'GET',
                url: menuApiUrlBase + '/menu_items.json',
                params: { category: categoryShortName }
            })
            .then(function (results) {
                return results.data.menu_items;
            });
    }
}