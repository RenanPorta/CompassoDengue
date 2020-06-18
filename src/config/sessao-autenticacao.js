const uuid = require('uuid/v4');
const sessao = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const UsuarioDAO = require('../app/infra/usuario-dao');
const db = require('./database');

module.exports = (app) => {

    passport.use(new LocalStrategy(
        {
            usernameField: 'exampleInputEmail1', 
            passwordField: 'exampleInputPassword1'
        },
        (email, senha, done) => {
            UsuarioDAO.buscaPorEmail(email)
                .then(usuario => {
                    if (!usuario || senha != usuario.senha){
                        return done(null, false, {
                            mensagem: 'Login e Senha incorretos!'
                        })
                    }
                    return done(null, usuario);
                })
                .catch(erro => done(erro, false));
        }
    ));

    passport.serializeUser((usuario, done) => {
        const usuarioSessao = {
            nome: usuario.nome,
            email: usuario.email
        };

        done(null, usuarioSessao);
    });

    passport.deserializeUser((usuarioSessao, done) => {
        done(null, usuarioSessao);
    });

    app.use(sessao({
        secret: 'Secretaria Saude MM',
        genid: function(req) {
            return uuid();
        },
        resave: false,
        saveUninitialized: false
    }));

    app.use(passport.initialize());
    app.use(passport.session());


    app.use(function (req, res, next){
        req.passport = passport;
        next();
    });
};