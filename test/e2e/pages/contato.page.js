var contatoPage = function() {

    this.visitar = function() {
        browser.get('http://localhost:3000/#contatos/novo');
    };

    this.nome = function(nome) {
        element(by.model('vm.contato.nome')).sendKeys(nome);
    };

    this.email = function(email) {
        element(by.model('vm.contato.email')).sendKeys(email);
    };

    this.emergencia = function(indice) {
        element(by.model('vm.contato.emergencia')).sendKeys(indice);
    };

    this.salvar = function() {
        element(by.css('.btn-primary')).click();
    };

    this.mensagem = function() {
        return element(by.binding('vm.mensagem')).getText();
    };
};

module.exports = contatoPage;
