const VisitaDAO = require('../infra/visita-dao');

module.exports = (app) => {

    app.get('/visita-cadastro', function(req, res) {
        res.marko(require('../views/layouts/visitas/cadastroVisita.marko'));
    });

    app.post('/visita', function(req, res) {
        console.log(req.body);
        VisitaDAO.adiciona(req.body, res);
    });
}