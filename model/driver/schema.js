const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const driverSchema = new Schema({
    name: {type: String, required: true},
    location: {
        lat: Number,
        lng: Number
    }
});


module.exports = mongoose.model('Driver', driverSchema);
