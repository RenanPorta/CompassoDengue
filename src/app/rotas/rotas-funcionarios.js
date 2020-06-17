const UsuarioDAO = require('../infra/usuario-dao');

module.exports = (app) => {

    app.use('/funcionario*', function(req, res, next) {
        if (req.isAuthenticated()) {
            next();
        } else {
            res.redirect('/login');
        }
    });


    app.get('/funcionario-consulta', function(req, res) {
        UsuarioDAO.listaFunc(res);
    });

    app.get('/funcionario-cadastro', function(req, res) {
        res.marko(require('../views/layouts/funcionario/cadastroFuncionario.marko'));
    });

    app.post('/funcionario', function(req, res) {
        UsuarioDAO.adicionaFunc(req.body, res);
    });

    app.get('/funcionario-altera/:id', function(req, res) {
        const id = req.params.id;
        UsuarioDAO.buscaPorIdFunc(id, res);
    });

    app.put('/funcionario-altera', function(req, res) {
        UsuarioDAO.alteraFunc(req.body, res);
    });

    app.delete('/funcionario/:id', function(req, res) {
        const id = req.params.id;
        UsuarioDAO.deletaPorIdFunc(id, res);
    });
}