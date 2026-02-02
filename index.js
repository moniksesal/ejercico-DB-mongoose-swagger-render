const express = require('express');
const app = express();
const PORT = 8080;
const mongoose = require('mongoose')
require('dotenv').config();
const MONGO_URI = process.env.MONGO_URI;
const { dbConnection } = require('./config/config');
const swaggerUI = require('swagger-ui-express')
const routes = require('./routes');
const docs = require('./docs/index')

app.use(express.json());

// Swagger
app.use('/api-docs', swaggerUI.serve,swaggerUI.setup(docs))

app.use('/', routes);


dbConnection();

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));