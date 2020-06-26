const VisitaDAO = require('../infra/visita-dao');
const nivelAcesso = require('../verificacoes/nivelAcesso');

module.exports = (app) => {

    app.use('/visita*', function(req, res, next) {
        if (req.isAuthenticated()) {
            next();
        } else {
            res.redirect('/home');
        }
    });

    app.get('/visita-cadastro', function(req, res) {
        const usuario = req.session.passport.user;
        const userId = {
            id: usuario.id
        }
        nivelAcesso(userId, (administrador, agenteSaude) => {
            if(administrador || agenteSaude){
                res.marko(require('../views/layouts/visitas/cadastroVisita.marko'),
                {
                    usuario: userId
                })
            }else{
                res.redirect('/home');
            }
        })
    });

    app.post('/visita', function(req, res) {
        const usuario = req.session.passport.user;
        const userId = {
            id: usuario.id
        }
        nivelAcesso(userId, (administrador, agenteSaude) => {
            if(administrador || agenteSaude){
                VisitaDAO.adiciona(req.body, res);
            }else{
                res.redirect('/home');
            }
        })        
    });

    app.get('/visita-consulta', function(req, res) {
        const usuario = req.session.passport.user;
        const userId = {
            id: usuario.id
        }
        nivelAcesso(userId, (administrador, agenteSaude) => {
            if(administrador || agenteSaude){
                VisitaDAO.lista(res);
            }else{
                res.redirect('/home');
            }
        })  
    });

    app.get('/visita', function(req, res) {
        const usuario = req.session.passport.user;
        const userId = {
            id: usuario.id
        }
        nivelAcesso(userId, (administrador, agenteSaude) => {
            if(administrador || agenteSaude){
                res.marko(require('../views/layouts/visitas/visita.marko'));
            }else{
                res.redirect('/home');
            }
        }) 
    });
}