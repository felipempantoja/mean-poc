app.controller('ContatosController', function(ContatosService) {

    var vm = this;

    vm.contatos = ContatosService.query();

    vm.remover = function(contato) {
        ContatosService.delete({id: contato._id});
        vm.contatos = ContatosService.query();
    };
});

app.controller('ContatoController', function($routeParams, ContatosService, $location) {

    var vm = this;

    vm.contatos = ContatosService.query();
    vm.contato = ContatosService.get({id: $routeParams.id});

    vm.salvar = function() {
        vm.contato.$save();
        $location.path('#/contatos');
    };
});

