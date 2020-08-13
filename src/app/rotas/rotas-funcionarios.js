const UsuarioDAO = require('../infra/usuario-dao');
const nivelAcesso = require('../verificacoes/nivelAcesso');


module.exports = (app) => {

    app.use('/funcionario*', function(req, res, next) {
        if (req.isAuthenticated()) {
            next();
        } else {
            res.redirect('/login');
        }
    });


    app.get('/funcionario-consulta', function(req, res) {
        const usuario = req.session.passport.user;
        const userId = {
            id: usuario.id
        }
        nivelAcesso(userId, (administrador, agenteSaude) => {
            if(administrador){
                UsuarioDAO.listaFunc(res);
            }else{
                res.redirect('/home');
            }
        })
    });

    app.get('/funcionario-cadastro', function(req, res) {
        const usuario = req.session.passport.user;
        const userId = {
            id: usuario.id
        }
        nivelAcesso(userId, (administrador, agenteSaude) => {
            if(administrador){
                res.marko(require('../views/layouts/funcionario/cadastroFuncionario.marko'));
            }else{
                res.redirect('/home');
            }
        })
    });

    app.post('/funcionario', function(req, res) {
        const usuario = req.session.passport.user;
        const userId = {
            id: usuario.id
        }
        nivelAcesso(userId, (administrador, agenteSaude) => {
            if(administrador){
                UsuarioDAO.adicionaFunc(req.body, res);
            }else{
                res.redirect('/home');
            }
        })
    });

    app.get('/funcionario-altera/:id', function(req, res) {
        const usuario = req.session.passport.user;
        const userId = {
            id: usuario.id
        }
        nivelAcesso(userId, (administrador, agenteSaude) => {
            if(administrador){
                const id = req.params.id;
                UsuarioDAO.buscaPorIdFunc(id, res);
            }else{
                res.redirect('/home');
            }
        })  
    });

    app.put('/funcionario-altera', function(req, res) {
        const usuario = req.session.passport.user;
        const userId = {
            id: usuario.id
        }
        nivelAcesso(userId, (administrador, agenteSaude) => {
            if(administrador){
                UsuarioDAO.alteraFunc(req.body, res);
            }else{
                res.redirect('/home');
            }
        })
    });

    app.get('/funcionario-inativa/:id', function(req, res) {
        const usuario = req.session.passport.user;
        const userId = {
            id: usuario.id
        }
        nivelAcesso(userId, (administrador, agenteSaude) => {
            if(administrador){
                const id = req.params.id;
                UsuarioDAO.inativaPorIdFunc(id, res);
                }else{
                res.redirect('/home');
            }
        })  
    });
    
    app.delete('/funcionario/:id', function(req, res) {
        const usuario = req.session.passport.user;
        const userId = {
            id: usuario.id
        }
        nivelAcesso(userId, (administrador, agenteSaude) => {
            if(administrador){
                const id = req.params.id;
                UsuarioDAO.deletaPorIdFunc(id, res);
            }else{
                res.redirect('/home');
            }
        })
    });
}