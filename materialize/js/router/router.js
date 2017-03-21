angulaAppModulo.config(function($routeProvider) {
    $routeProvider
        .when('/montarProvaAberta', {
            templateUrl: 'montarProvaAberta.html'
        })
        .when('/gerarProvas', {
            templateUrl: 'gerarProvas.html'
        });
        .when('/template', {
            templateUrl: 'template.html'
        });
});
