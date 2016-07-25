var ContatoPage = require('./pages/contato.page');

describe('Página de Cadastro de Contatos', function() {

    var page = new ContatoPage();

    beforeEach(function() {
        page.visitar();
    });

    it('deveria cadastrar um usuário', function() {
        var random = Math.floor((Math.random() * 10000000 + 1));
        var nome = 'teste' + random;
        var email = 'teste@email' + random;

        page.nome(nome);
        page.email(email);
        page.emergencia(0);
        page.salvar();

        expect(page.mensagem()).toEqual('Contato salvo com sucesso!');
    });
});
