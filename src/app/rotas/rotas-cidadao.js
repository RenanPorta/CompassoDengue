const CidadaoDAO = require('../infra/cidadao-dao');

module.exports = (app) => {

    app.use('/cidadao*', function(req, res, next) {
        if (req.isAuthenticated()) {
            next();
        } else {
            res.redirect('/login');
        }
    });

    app.get('/cidadao-consulta', function(req, res) {
        CidadaoDAO.lista(res);
    });

    app.get('/cid-cadastro', function(req, res) {
        res.marko(require('../views/layouts/cidadao/cadastroCidadao.marko'));
    });

    app.post('/cid', function(req, res) {
        CidadaoDAO.adiciona(req.body, res);
    });

    app.get('/cidadao-altera/:id', function(req, res) {
        const id = req.params.id;
        CidadaoDAO.buscaPorId(id, res);
    });

    app.put('/cidadao-altera', function(req, res) {
        CidadaoDAO.altera(req.body, res);
    });

    app.delete('/cidadao/:id', function(req, res) {
        const id = req.params.id;
        CidadaoDAO.deletaPorId(id, res);
    });
}