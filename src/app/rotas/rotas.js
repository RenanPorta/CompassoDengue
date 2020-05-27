const DenunciasDAO = require('../infra/denuncias-dao');
const CidadaoDAO = require('../infra/cidadao-dao');

module.exports = (app) => {

    app.get('/consulta-denuncia', function(req, res) {
        DenunciasDAO.lista(res);
    });
    
    app.get('/consulta-cidadao', function(req, res) {
        CidadaoDAO.lista(res);
    });

    app.post('/cadastro-denuncia', function(req, res) {
        const denuncia = req.body
        DenunciasDAO.adiciona(denuncia, res);
        console.log('Denuncia enviada!')
    });

    app.post('/cadastro-cidadao', function(req, res) {
        const cidadao = req.body
        CidadaoDAO.adiciona(cidadao, res);
        console.log('Cidadão cadastrado!')
    });

};