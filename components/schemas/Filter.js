const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Filter = Schema({
    startId: { type: Number, min: 1, max: 20 },
    endId: { type: Number, min: 1, max: 20 }
});

module.exports = mongoose.model('filters', Filter);