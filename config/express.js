var express = require('express');
var load = require('express-load');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var passport = require('passport');
var helmet = require('helmet');

module.exports = function(app) {

	app.set('port', 3000);

    //middleware
    app.use(express.static('./public'));
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());
    app.use(require('method-override')());

    app.use(cookieParser());
    app.use(session({
        secret: 'Ex nihilo nihil fit',
        resave: true,
        saveUnitialized: true
    }));
    app.use(passport.initialize());
    app.use(passport.session());

    app.use(helmet());
//    app.disable('x-powered-by');
    app.use(helmet.hidePoweredBy({ setTo: 'PHP 5.5.14' }));
    //evita que a pagina seja referenciada por frames/iframes, evitando clickjacking
    app.use(helmet.frameguard({ action: 'deny'  }));
    //evita ataques xss (input de tags stript nao sanitizadas)
    app.use(helmet.xssFilter());
    //evita que o browser infira outro mime type (tags link e script com arquivo txt por exemplo)
    app.use(require('dont-sniff-mimetype')());


	app.set('view engine', 'ejs');
	app.set('views', './app/views');

	load('models', {cwd: 'app'})
		.then('controllers')
		.then('routes/auth.js')
		.then('routes')
        .into(app);

    //se nenhuma rota atender: 404
    app.get('*', function(req, res) {
        res.status(404).render('404');
    });

	return app;
}
