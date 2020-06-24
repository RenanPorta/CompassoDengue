const VisitaDAO = require('../infra/visita-dao');
const nivelAcesso = require('../infra/nivelAcesso');

module.exports = (app) => {

    app.get('/visita-cadastro', function(req, res) {
        const usuario = req.session.passport.user;
        const userEmail = {
            email: usuario.email
        };
        VisitaDAO.buscaDadosUsuarioLogado(userEmail, res);
    });

    app.post('/visita', function(req, res) {     
       VisitaDAO.adiciona(req.body, res);    
    });

    app.get('/visita-consulta', function(req, res) {
        VisitaDAO.lista(res);
    });

    app.get('/visita', function(req, res) {
        res.marko(require('../views/layouts/visitas/visita.marko'));
    });
}