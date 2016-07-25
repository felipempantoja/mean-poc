"use strict";

app.controller('ContatosController', function(ContatosService, $scope) {

    var vm = this;

    vm.contatos = ContatosService.query();

    vm.remover = function(contato) {
        ContatosService.delete({id: contato._id}).$promise.then(function() {
            vm.contatos = ContatosService.query();
            $scope.$emit('event:mensagem', 'Contato removido com sucesso!');
        });
    };
});

app.controller('ContatoController', function($routeParams, ContatosService, $location, $scope) {

    var vm = this;

    vm.contatos = ContatosService.query();
    vm.contato = ContatosService.get({id: $routeParams.id});

    vm.salvar = function() {
        vm.contato.$save();
        $location.path('#/contatos');
        $scope.$emit('event:mensagem', 'Contato salvo com sucesso!');
    };
});

