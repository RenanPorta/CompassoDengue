module.exports = (app) => {

    app.get('/home', function(req, res) {
        res.marko(require('../views/layouts/home/index.marko'));
    });

    app.get('/login', function(req, res) {
        res.marko(require('../views/layouts/home/login.marko'));
    });


}
