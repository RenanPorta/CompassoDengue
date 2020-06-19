const passport = require('passport');

module.exports = (app) => {

    app.get('/home', function(req, res) {
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
            res.redirect('/home');              
        });
    });
}
