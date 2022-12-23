/**
 * Initialize application
 */
const express = require('express');
const app = express();
const connect = require('./config/connect');
const bodyParser = require('body-parser');
const notFoundMiddleware = require('./api/middlewares/NotFound');
const handleErrorsMiddleware = require('./api/middlewares/HandleErrors');

/**
 * Middlewares
 */
app.use(bodyParser.urlencoded({extended: true}));

/**
 * ENV Variables
 */
require('dotenv').config({
    path: './.env',
});
const PORT = process.env.PORT;
const ATLAS_URI = process.env.ATLAS_URI;

/**
 * Routes Declaration
 */
app.use('/', require('./api/routes/TasksRoutes'));

/**
 * Middlewares
 */
app.use(notFoundMiddleware);
app.use(handleErrorsMiddleware);

/**
 * MongoDB Configuration & Run Server
 */
const start = async () => {
    try {
        /**
         * The connection to cloud-database is successful.
         */
        await connect(ATLAS_URI);
        app.listen(PORT, console.log("Running on port", PORT));
    } catch (error) {
        /**
         * There was an error trying to connect to cloud-database.
         */
        console.error(error.message);
    }
}
start();