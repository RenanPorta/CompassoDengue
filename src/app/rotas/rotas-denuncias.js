const DenunciasDAO = require('../infra/denuncias-dao');

module.exports = (app) => {

    app.use('/denuncia*', function(req, res, next) {
        if (req.isAuthenticated()) {
            next();
        } else {
            res.redirect('/login');
        }
    });

    app.get('/denuncia-cadastro', function(req, res) {
        res.marko(require('../views/layouts/denuncias/cadastroDenuncia.marko'));
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
        DenunciasDAO.buscaPorIdAlterar(id, res);
    });

    app.put('/denuncia-altera', function(req, res) {
        DenunciasDAO.altera(req.body, res);
    });
}