const DenunciasDAO = require('../infra/denuncias-dao');
const CidadaoDAO = require('../infra/cidadao-dao');

module.exports = (app) => {

    app.get('/denuncia-consulta', function(req, res) {
        DenunciasDAO.lista(res);
    });
    
    app.get('/cidadao-consulta', function(req, res) {
        CidadaoDAO.lista(res);
    });

    app.get('/cidadao/:cpf', function(req, res) {
        const cpf = req.params.cpf;
        CidadaoDAO.buscaPorCPF(cpf, res);
    });

    app.post('/denuncia-cadastro', function(req, res) {
        const denuncia = req.body
        DenunciasDAO.adiciona(denuncia, res);
    });

    app.get('/cidadao-cadastro', function(req, res) {
        res.marko(require('../views/layouts/cidadao/cadastroCidadao.marko'));
    });

    app.post('/cidadao', function(req, res) {
        CidadaoDAO.adiciona(req.body, res);
    });

    app.delete('/cidadao/:cpf', function(req, res) {
        const cpf = req.params.cpf;
        CidadaoDAO.deletaPorCPF(cpf, res);
    });

};