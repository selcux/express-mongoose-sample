const Controller = require('../../lib/controller');
const rideFacade = require('./facade');

class RideController extends Controller {}

module.exports = new RideController(rideFacade);
