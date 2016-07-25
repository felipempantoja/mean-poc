var mongoose = require('mongoose');

module.exports = function(uri) {

    console.log('database.js')

    mongoose.Promise = global.Promise;
    mongoose.set('debug', true);
    mongoose.connect(uri);

    mongoose.connection.on('connected', function() {
        console.log('Mongoose! Conectado em ' + uri);

    });
    mongoose.connection.on('disconnected', function() {
        console.log('Mongoose! Desconectado de ' + uri);

    });

    mongoose.connection.on('error', function(erro) {
        console.log('Mongoose! Erro na conexão: ' + erro);
    });

    process.on('SIGINT', function() {
        mongoose.connection.close(function() {
            console.log('Mongoose! Desconectado pelo termino da aplicacao');
            process.exit(0);
        })
    });
};
