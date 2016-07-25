"use strict";

var app = angular.module('mean-poc', ['ngRoute', 'ngResource']);

app.config(function($routeProvider) {

    $routeProvider.when('/contatos', {
        templateUrl: 'partials/contatos.html',
        controller: 'ContatosController',
        controllerAs: 'vm'
    });

    $routeProvider.when('/contatos/:id', {
        templateUrl: 'partials/contato.html',
        controller: 'ContatoController',
        controllerAs: 'vm'
    });

    $routeProvider.otherwise({redirectTo: '/contatos'});
});

app.controller('MainController', function($rootScope) {
    var vm = this;

    vm.mensagem = null;

    $rootScope.$on('event:mensagem', function(event, data) {
        vm.mensagem = data;
    });
});
