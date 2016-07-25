var contatosPage = function() {

    this.visitar = function() {
        browser.get('http://localhost:3000/#contatos')
    };

    this.usuarioLogado = function() {
        return element(by.id('usuario-logado')).getText();
    };

    this.total = function() {
        return element.all(by.repeater('contato in vm.contatos')).count();
    };

    this.removerUltimo = function() {
        element.all(by.repeater('contato in vm.contatos'))
            .last()
            .element(by.css('.btn'))
            .click();

    };

    this.mensagem = function() {
        return element(by.binding('vm.mensagem')).getText();
    };
};

module.exports = contatosPage;
