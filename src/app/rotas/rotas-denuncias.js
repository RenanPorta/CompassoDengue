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
        const usuario = req.session.passport.user;
        const userEmail = {
            email: usuario.email
        };
        DenunciasDAO.buscaDadosCidadaoLogado(userEmail, res);
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