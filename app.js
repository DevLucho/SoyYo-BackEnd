const { appConfig } = require('./config');
const cors = require('cors');
const express = require('express');
const app = express();

// routes api
const EntityRoutes = require('./routes/EntityRouter');

// setting
app.set('host', appConfig.host);
app.set('port', process.env.PORT || appConfig.port);
app.set('json spaces', 2);

// middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

// list routes
app.use('/api/entities', EntityRoutes);

module.exports = app