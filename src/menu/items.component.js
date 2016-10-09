angular
    .module('MenuApp')
    .component('items', {
        templateUrl: 'src/menu/templates/items.html',
        bindings: {
            data: '<'
        }
    });