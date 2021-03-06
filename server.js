/**
 * @description   : It is use to establish the connection between the database and server
 * @package       : express, swagger-ui-express, dotenv
 * @file          : server.js
 * @author        : Gautam Biswal <gautam971997@gmail.com>
*/
const express = require('express');
const swaggerUI = require('swagger-ui-express');
const cors = require('cors');
const swaggerDoc = require('./app/swagger.json');
const logger = require('./app/logger/user');
require('dotenv').config();
require('./config/redisConfig');
require('./config/dbConfig');

const app = express();

app.use(cors());

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the FundooNotesApp.' });
});

require('./app/routes/routes')(app);

app.use('/swagger', swaggerUI.serve, swaggerUI.setup(swaggerDoc));

app.listen(process.env.PORT, () => {
  logger.log('info', 'Server is listening on port 3000');
});

module.exports = app;
