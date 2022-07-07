const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Entity = Schema({
    entityId: {type: Number, required: true},
    name: String,
    identificationNumber: {type: String, required: true},
    expirationDate: {type: String, required: true},
    contactName: {type: String, required: true},
    contactEmail: {type: String, required: true},
    logo: String
});

module.exports = mongoose.model('entities', Entity);