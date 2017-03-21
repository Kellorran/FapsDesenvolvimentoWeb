angulaAppModulo.config(function($routeProvider) {
    $routeProvider
        .when('/index', {
            templateUrl: 'index.html'
        })
        .when('/montarProvaAberta', {
            templateUrl: 'montarProvaAberta.html'
        })
        .when('/gerarProvas', {
            templateUrl: 'gerarProvas.html'
        });
});
