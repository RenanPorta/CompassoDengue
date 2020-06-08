require('marko/node-require').install();
require('marko/express');

const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser');
const app = express();

    app.use(bodyParser.urlencoded({
        extended: true
    }));

    consign()
        .include('/src/app/rotas')
        .into(app);

module.exports = app;