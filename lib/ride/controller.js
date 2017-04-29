const driverController = require('../../model/driver/controller');

class RideController {
    _getNearestDrivers() {

    }

    find(req, res, next) {
        return res.json({message: 'Helo from ride!'});
    }


}

module.exports = new RideController();