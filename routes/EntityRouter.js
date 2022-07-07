const EntityController = require('../controllers/EntityController');
const Error = require('../components/schemas/Error');
const Filter = require('../components/schemas/Filter');
const { celebrate, Joi } = require('celebrate');
const express = require('express');
const api = express.Router();

const message = Error({Error: "Error en validación datos de entrada"});

api.post('/filter', celebrate({
    body: Joi.object().keys({
        startId: Joi.number().integer().required(),
        endId: Joi.number().integer().required()
    }).unknown()
}), (err, req, res, next) => {
    res.status(400).send({status: 400, message: message.Error});
}, EntityController.filterEntity);

module.exports = api;