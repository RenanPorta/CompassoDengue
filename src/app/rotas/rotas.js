const DenunciasDAO = require('../infra/denuncias-dao');
const CidadaoDAO = require('../infra/cidadao-dao');

module.exports = (app) => {

    app.get('/denuncia-cadastro', function(req, res) {
        res.marko(require('../views/layouts/denuncias/cadastroDenuncia.marko'));
    });

    app.post('/denuncia', function(req, res) {
        DenunciasDAO.adiciona(req.body, res);
    });

    app.get('/denuncia-consulta', function(req, res) {
        DenunciasDAO.lista(res);
    });
    
    app.get('/cidadao-consulta', function(req, res) {
        CidadaoDAO.lista(res);
    });

    app.get('/cidadao-cadastro', function(req, res) {
        res.marko(require('../views/layouts/cidadao/cadastroCidadao.marko'));
    });

    app.post('/cidadao', function(req, res) {
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
};