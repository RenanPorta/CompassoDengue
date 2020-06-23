const passport = require('passport');
const nivelAcesso = require('../infra/nivelAcesso');

module.exports = (app) => {

    app.use('/sair*', function(req, res, next) {
        if (req.isAuthenticated()) {
            next();
        } else {
            res.redirect('/');
        }
    });

    app.use('/home*', function(req, res, next) {
        if (req.isAuthenticated()) {
            next();
        } else {
            res.redirect('/');
        }
    });

    app.get('/home', function(req, res) {
        const usuario = req.session.passport.user;
        const userEmail = {
            email: usuario.email
        };
        nivelAcesso(userEmail, (administrador, agenteSaude) => {
            if(administrador || agenteSaude){
                res.marko(require('../views/layouts/home/indexFuncionario.marko'));
            }else{
                res.marko(require('../views/layouts/home/indexCidadao.marko'));
            }
        }) 
    });

    app.get('/', function(req, res) {
        res.marko(require('../views/layouts/home/index.marko'));
    });

    app.get('/login', function(req, res) {
        res.marko(require('../views/layouts/home/login.marko'));
    });

    app.post('/login', function(req, res, next) {
        const passport = req.passport;
        passport.authenticate('local', (erro, cidadao, info) => {
            if (info) {
                return res.marko(require('../views/layouts/home/loginIncorreto.marko'));
            }

            if (erro) {
                return next(erro);
            }

            req.login(cidadao, () => {
                if(erro){
                    return next(erro);
                }

                return res.redirect('/home');
            });
        })(req, res, next);
    });

    app.get('/sair', function(req, res) {
        req.session.destroy(function () {
            req.logout();
            res.redirect('/login');              
        });
    });
}
