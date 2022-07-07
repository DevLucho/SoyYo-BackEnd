const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Error = Schema({
    Error: String
});

module.exports = mongoose.model('error', Error);