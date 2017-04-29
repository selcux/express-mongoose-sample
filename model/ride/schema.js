const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const rideSchema = new Schema({
    title: {type: String, required: true},
    location: {
        lat: Number,
        lng: Number
    },
    driver: {type: Schema.ObjectId, ref: "driverSchema"}
});


module.exports = mongoose.model('Ride', rideSchema);
