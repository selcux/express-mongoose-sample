const Facade = require('../../lib/facade');
const rideSchema = require('./schema');

class RideFacade extends Facade {}

module.exports = new RideFacade(rideSchema);
