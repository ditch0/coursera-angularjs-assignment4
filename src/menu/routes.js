angular
    .module('MenuApp')
    .config(RoutesConfig)
    .run(function($rootScope) {
        $rootScope.$on("$stateChangeError", console.log.bind(console));
    });

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'src/menu/templates/home.html'
        })
        .state('menu', {
            url: '/menu',
            templateUrl: 'src/menu/templates/menu.html',
            controller: 'MenuController as ctrl'
        })
        .state('menu.menuCategory', {
            url: '/menu/{categoryId}',
            template: '<items data="ctrl.categoryItems" />',
            controller: 'MenuCategoryController as ctrl',
            resolve: {
                categoryId: ['$stateParams', function($stateParams) {
                    return $stateParams.categoryId;
                }]
            }
        });
}