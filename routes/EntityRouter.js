const EntityController = require('../controllers/EntityController');
const Error = require('../components/schemas/Error');
const Auth = require('../middleware/Auth');
const { celebrate, Joi } = require('celebrate');
const express = require('express');
const api = express.Router();

const message = Error({ Error: "Error en validación datos de entrada." });

api.post('/filter', Auth.isAuth, celebrate({
    body: Joi.object().keys({
        startId: Joi.number().min(1).max(20).integer().required(),
        endId: Joi.number().min(1).max(20).integer().required()
    }).unknown()
}), (err, req, res, next) => {
    res.status(400).json({ status: 400, message: message.Error });
}, EntityController.filterEntity);

module.exports = api;