var config = require('./config/config')();
var http = require('http');
var express = require('express');
var app = express();
require('./config/express')(app);
require('./config/passport')();
require('./config/database')(config.db);

http.createServer(app).listen(app.get('port'), function() {
	console.log('Express Server listening on ' + app.get('port') + '...');
});
