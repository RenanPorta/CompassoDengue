const uuid = require('uuid/v4');
const sessao = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const CidadaoDAO = require('../app/infra/cidadao-dao');
const db = require('./database');

module.exports = (app) => {

    passport.use(new LocalStrategy(
        {
            usernameField: 'exampleInputEmail1', 
            passwordField: 'exampleInputPassword1'
        },
        (email, senha, done) => {
            CidadaoDAO.buscaPorEmail(email)
                .then(cidadao => {
                    if (!cidadao || senha != cidadao.senha){
                        return done(null, false, {
                            mensagem: 'Login e Senha incorretos!'
                        })
                    }
                    return done(null, cidadao);
                })
                .catch(erro => done(erro, false));
        }
    ));

    passport.serializeUser((cidadao, done) => {
        const cidadaoSessao = {
            nome: cidadao.nome,
            email: cidadao.email
        };

        done(null, cidadaoSessao);
    });

    passport.deserializeUser((cidadaoSessao, done) => {
        done(null, cidadaoSessao);
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