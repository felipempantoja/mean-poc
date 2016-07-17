var contatos = [
    {_id: 1, nome: 'Contato Exemplo 1', email: 'cont1@empresa.com.br'},
    {_id: 2, nome: 'Contato Exemplo 2', email: 'cont2@empresa.com.br'},
    {_id: 3, nome: 'Contato Exemplo 3', email: 'cont3@empresa.com.br'}
];

module.exports = function(app) {
    var Contato = app.models.contato;

    return {

        listar: function(req, res) {
            var promise = Contato.find().populate('emergencia').exec().then(function(contatos) {
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
            var contato = req.body;
            if(contato._id) {
                Contato.findByIdAndUpdate(contato._id, contato).exec()
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
            var promise = Contato.remove({'_id': req.params.id}).exec()
                .then(function() {
                    res.end();
                }, function(erro) {
                    return console.error(erro);
                 });

            var id = req.params.id;
            contatos = contatos.filter(function(e) { return e._id != id; });
            res.status(204).end();
        }
    };
}
