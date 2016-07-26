describe('ContatosController', function() {

    var controller;

    beforeEach(function() {
        module('mean-poc');
        inject(function($controller, $rootScope) {
            $scope = $rootScope.$new();
            controller = $controller('ContatosController', {'$scope': $scope});
        });
    });

    it('deveria criar um contato vazio quando nenhum parametro de rota for passado', function() {
        expect(controller.contatos).toBeDefined();
    });
});

describe('ContatoController', function() {

    var controller;
    var $httpBackend;
    var $scope;

    beforeEach(function() {
        module('mean-poc');
        inject(function($controller, _$httpBackend_, $rootScope) {
            $scope = $rootScope.$new();
            $httpBackend = _$httpBackend_;
            $httpBackend.when('GET', '/contatos').respond([]);
            $httpBackend.when('GET', '/contatos/1').respond({_id: 1});
        });
    });

    it('deveria criar um contato vazio quando nenhum parametro de rota for passado', inject(function($controller) {
        controller = $controller('ContatoController', {'$scope': $scope});
        expect(controller.contato._id).toBeUndefined();
    }));

    it('deveria criar um contato quando um parametro de rota for passado', function($controller) {
        controller = $controller('ContatoController', {'$scope': $scope, '$routeParams': {id: 1}});
        $httpBackend.flush();
        expect(controller.contato._id).toBeDefined();
    });
});
