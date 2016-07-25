var sanitize = require('mongo-sanitize');

module.exports = function(app) {
    var Contato = app.models.contato;

    return {

        listar: function(req, res) {
            var promise = Contato.find().populate('emergencia').exec()
                .then(function(contatos) {
                    res.json(contatos);
                }, function(erro) {
                    console.error(erro);
                    res.status(500).json(erro);
                });
        },

        obter: function(req, res) {
            var promise = Contato.findById(req.params.id).exec()
                .then(function(contato) {
                    if(!contato) throw new Error("Contato não encontrado");
                    res.json(contato);
                }, function(erro) {
                    console.error(erro);
                    res.status(404).json(erro);
                 });
        },

        salvar: function(req, res) {
            //Evitando atualizacao de atributo interno
            var contato = {
                nome: req.body.nome,
                email: req.body.email,
                emergencia: req.body.emergencia
            };

            if(req.body._id) {
                Contato.findByIdAndUpdate(req.body._id, contato).exec()
                    .then(function(contato) {
                        res.json(contato);
                    }, function(erro) {
                        console.error(erro);
                        res.status(500).json(erro);
                    });
            } else {
                Contato.create(contato)
                    .then(function(contato) {
                        res.status(201).json(contato);
                    }, function(erro) {
                        console.error(erro);
                        res.status(500).json(erro);
                    })
            }
        },

        remover: function(req, res) {
            var id = sanitize(req.params.id);
            Contato.remove({'_id': id}).exec()
                .then(function() {
                    res.end();
                }, function(erro) {
                    return console.error(erro);
                 });
        }
    };
}
