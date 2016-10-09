angular
    .module('MenuApp')
    .controller('MenuCategoryController', MenuCategoryController);

MenuCategoryController.$inject = ['MenuDataService', 'categoryId'];
function MenuCategoryController(MenuDataService, categoryId) {
    var self = this;
    MenuDataService
        .getItemsForCategory(categoryId)
        .then(function(data) {
            self.categoryItems = data;
        });
}