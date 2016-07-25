var authRequired = require('../../config/auth');

module.exports = function(app) {
    var controller = app.controllers.contato;

    app.route('/contatos')
        .get(authRequired, controller.listar)
        .post(authRequired, controller.salvar);

    app.route('/contatos/:id')
        .get(controller.obter)
        .delete(authRequired, controller.remover);
}
