const Facade = require('../../lib/facade');
const driverSchema = require('./schema');

class DriverFacade extends Facade {}

module.exports = new DriverFacade(driverSchema);
