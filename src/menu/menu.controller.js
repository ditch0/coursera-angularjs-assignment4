angular
    .module('MenuApp')
    .controller('MenuController', MenuController);

MenuController.$inject = ['MenuDataService'];
function MenuController(MenuDataService) {
    var self = this;
    MenuDataService
        .getAllCategories()
        .then(function(data) {
            self.menuCategories = data;
        });
}