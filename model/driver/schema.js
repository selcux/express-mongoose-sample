const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const driverSchema = new Schema({
    name: {type: String, required: true},
    location: {
        latitude: Number,
        longitude: Number
    }
});


module.exports = mongoose.model('Driver', driverSchema);
