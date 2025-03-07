const express = require('express');
const app = express();
const routing = require("./routes");
var winston = require('winston');
const env = require('dotenv');
env.config({ path: ".env" });

const port = process.env.PORT || 3000;
/*
// S'assurer que 'debug' est correctement initialisé
process.env.DEBUG="Pokedex";
const debug = require('debug')('Pokedex');
*/

var logger = new (winston.Logger)({
    level : 'debug',
    transports: [
        new (winston.transports.Console)()
    ]
});

// Appel de la fonction de routage
routing(app);

// Lancer l'application
app.listen(port, () => {
    logger.log('debug', `App listening on port ${port}`);
});
