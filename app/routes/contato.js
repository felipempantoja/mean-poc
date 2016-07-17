module.exports = function(app) {
    var controller = app.controllers.contato;

    app.route('/contatos')
        .get(controller.listar)
        .post(controller.salvar);

    app.route('/contatos/:id')
        .get(controller.obter)
        .delete(controller.remover);
}
