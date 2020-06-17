const VisitaDAO = require('../infra/visita-dao');

module.exports = (app) => {

    app.get('/visita-cadastro', function(req, res) {
        res.marko(require('../views/layouts/visitas/cadastroVisita.marko'));
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