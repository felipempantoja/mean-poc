var mongoClient = require('mongodb').MongoClient;

var contatos = [
    {nome: "xyz1", email: 'xyz1@email.com.br'},
    {nome: "xyz2", email: 'xyz2@email.com.br'},
    {nome: "xyz3", email: 'xyz3@email.com.br'}
];

mongoClient.connect('mongodb://localhost:27017/mean-poc-test', function(erro, db) {
    if(erro) throw err;
    db.dropDatabase(function(erro) {
        if(erro) {
            console.log('erro');
            throw erro;
        }
        console.log('Banco apagado com sucesso');
        db.collection('contatos').insert(contatos, function(erro, inserted) {
            if(erro) throw erro;
            console.log('Banco populado com sucesso');
            process.exit(0);
        });
    });
});

