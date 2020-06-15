const FuncionarioDAO = require('../infra/funcionario-dao');

module.exports = (app) => {

    app.get('/funcionario-consulta', function(req, res) {
        FuncionarioDAO.lista(res);
    });

    app.get('/funcionario-cadastro', function(req, res) {
        res.marko(require('../views/layouts/funcionario/cadastroFuncionario.marko'));
    });

    app.post('/funcionario', function(req, res) {
        FuncionarioDAO.adiciona(req.body, res);
    });

    app.get('/funcionario-altera/:id', function(req, res) {
        const id = req.params.id;
        FuncionarioDAO.buscaPorId(id, res);
    });

    app.put('/funcionario-altera', function(req, res) {
        FuncionarioDAO.altera(req.body, res);
    });

    app.delete('/funcionario/:id', function(req, res) {
        const id = req.params.id;
        FuncionarioDAO.deletaPorId(id, res);
    });
}