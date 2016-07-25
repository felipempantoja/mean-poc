var passport = require('passport');
var GitHubStrategy = require('passport-github').Strategy;
var mongoose = require('mongoose');

module.exports = function() {

    console.log('passport.js');

    var Usuario = mongoose.model('Usuario');

    passport.use(new GitHubStrategy({
        clientID: '4adfbebc638fcbecf270',
        clientSecret: '09bf50b7c260a972f78a8ccba427639564b357f0',
        callbackURL: 'http://localhost:3000/auth/github/callback'
    }, function(accessToken, refreshToken, profile, done) {
        console.log('githubStrategy...');
        Usuario.findOrCreate(
            {'login': profile.username},
            {'nome': profile.username},
            function(erro, usuario) {
                if(erro) {
                    console.error(erro);
                    return done(erro);
                }
                return done(null, usuario);
            }
        )

    }));

    passport.serializeUser(function(usuario, done) {
        console.log('serializing...');
        done(null, usuario._id);
    });

    passport.deserializeUser(function(id, done) {
        console.log('Deserializing...');
        Usuario.findById(id).exec().then(function(usuario) {
            done(null, usuario);
        });
    });
};
