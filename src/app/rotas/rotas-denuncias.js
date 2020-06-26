const DenunciasDAO = require('../infra/denuncias-dao');
const nivelAcesso = require('../verificacoes/nivelAcesso');

module.exports = (app) => {

    app.use('/denuncia*', function(req, res, next) {
        if (req.isAuthenticated()) {
            next();
        } else {
            res.redirect('/login');
        }
    });

    app.get('/denuncia-cadastro', function(req, res) {
        const usuario = req.session.passport.user;
        const userId = {
            id: usuario.id
        }
        DenunciasDAO.buscaDadosCidadaoLogado(userId, res);
    });

    app.post('/denuncia', function(req, res) {
        DenunciasDAO.adiciona(req.body, res);
    });

    app.get('/denuncia-consulta', function(req, res) {
        DenunciasDAO.lista(res);
    });

    app.get('/denuncia-visualiza/:id', function(req, res) {
        const id = req.params.id;
        DenunciasDAO.buscaPorId(id, res);
    });

    app.get('/denuncia-altera/:id', function(req, res) {
        const id = req.params.id;
        const usuario = req.session.passport.user;
        const userId = {
            id: usuario.id
        }
        nivelAcesso(userId, (administrador, agenteSaude) => {
            if(administrador){
                DenunciasDAO.buscaPorIdAlterar(id, res);
            }else if(agenteSaude){
                DenunciasDAO.buscaPorIdAlterar(id, res);
            }else{
                res.redirect('/denuncia-consulta');
            }
        })   
    });

    app.put('/denuncia-altera', function(req, res) {
        const usuario = req.session.passport.user;
        const userId = {
            id: usuario.id
        }
        nivelAcesso(userId, (administrador, agenteSaude) => {
            if(administrador){
                DenunciasDAO.altera(req.body, res);
            }else if(agenteSaude){
                DenunciasDAO.altera(req.body, res);
            }else{
                res.redirect('/denuncia-consulta');
            }
        })   
    });
}