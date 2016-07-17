var http = require('http');
var app = require('./config/express')();

require('./config/database')('mongodb://localhost/mean-poc');

http.createServer(app).listen(app.get('port'), function() {
	console.log('Express Server listening on ' + app.get('port') + '...');
});
