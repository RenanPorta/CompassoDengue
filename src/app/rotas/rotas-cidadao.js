const UsuarioDAO = require('../infra/usuario-dao');
const nivelAcesso = require('../infra/nivelAcesso');

module.exports = (app) => {

    app.use('/cidadao*', function(req, res, next) {
        if (req.isAuthenticated()) {
            next();
        } else {
            res.redirect('/login');
        }
    });

    app.get('/cidadao-consulta', function(req, res) {
        const usuario = req.session.passport.user;
        const userEmail = {
            email: usuario.email
        };
        nivelAcesso(userEmail, (administrador, agenteSaude) => {
            if(administrador){
                UsuarioDAO.listaCid(res);
            }else if(agenteSaude){
                res.redirect('/home');
            }else {
                UsuarioDAO.listaCidadaoLogado(userEmail, res);
            }
        })
    });

    app.get('/cid-cadastro', function(req, res) {
        res.marko(require('../views/layouts/cidadao/cadastroCidadao.marko'));
    });

    app.post('/cid', function(req, res) {
        UsuarioDAO.adicionaCid(req.body, res);
    });

    app.get('/cidadao-altera/:id', function(req, res) {
        const id = req.params.id;
        UsuarioDAO.buscaPorIdCid(id, res);
    });

    app.put('/cidadao-altera', function(req, res) {
        UsuarioDAO.alteraCid(req.body, res);
    });

    app.delete('/cidadao/:id', function(req, res) {
        const id = req.params.id;
        UsuarioDAO.deletaPorIdCid(id, res);
    });
}