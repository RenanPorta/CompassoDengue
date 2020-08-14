const uuid = require('uuid/v4');
const sessao = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');

const UsuarioDAO = require('../app/infra/usuario-dao');

module.exports = (app) => {

    passport.use(new LocalStrategy(
        {
            usernameField: 'exampleInputEmail1', 
            passwordField: 'exampleInputPassword1'
        },
        (email, senha, done) => {
            UsuarioDAO.buscaPorEmail(email)
                .then(usuario => {
                    if(usuario){
                        bcrypt.compare(senha, usuario.senha, function(err, result) {
                            if(!result){
                                return done(null, false, {
                                    mensagem: 'Credencias inválidas!'
                                })
                            }else{
                                return done(null, usuario);
                            }
                        })    
                    }else{
                        return done(null, false, {
                            mensagem: 'Credencias inválidas!'
                        })
                    }
                })  
            .catch(erro => done(erro, false));  
        }
    ));

    passport.serializeUser((usuario, done) => {
        const usuarioSessao = {
            id: usuario.id,
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