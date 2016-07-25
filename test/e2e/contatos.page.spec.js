var ContatosPage = require('./pages/contatos.page.js');

describe('Página de Contatos', function() {

    var page = new ContatosPage();

    beforeEach(function() {
        page.visitar();
    });

    it('deveria estar logado', function() {
        page.usuarioLogado().then(function(texto) {
            expect(texto.trim().length).toBeGreaterThan(0);
        });
    });

    it('deveria remover um contato', function() {
        var totalAntes = page.total();
        page.removerUltimo();
        var totalDepois = page.total();

        expect(page.mensagem()).toEqual('Contato removido com sucesso!');
        expect(totalAntes).toBeGreaterThan(totalDepois);
    });
});
