var mongoClient = require('mongodb').MongoClient;
var oId = require('mongodb').ObjectID;

mongoClient.connect('mongodb://localhost:27017/mean-poc', function(erro, db) {
    if(erro) throw err;
    
    db.collection('contatos').findOne(function(erro, contato) {
        if(erro) throw err;
        console.log(contato);
    });
});
