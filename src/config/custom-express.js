
const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser');
const app = express();

    app.use(bodyParser.json());

    consign()
        .include('/src/app/rotas')
        .into(app);

module.exports = app;