const Facade = require('../facade');
const driverSchema = require('../../model/driver/schema');

class RideFacade extends Facade {}

module.exports = new RideFacade(driverSchema);
