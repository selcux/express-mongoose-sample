const rideFacade = require('./facade');
const geolib = require('geolib');

class RideController {
    constructor(facade) {
        this.facade = facade;
    }

    find(req, res, next) {
        let passengerLocation = req.body;

        let nearestDrivers = this.facade.find(req.query)
            .then(collection => collection
                .sort((driver) => geolib.getDistance(passengerLocation, driver.location))
                .reverse()
                .slice(0, 3));

        return nearestDrivers
            .then(collection => res.status(200).json(collection))
            .catch(err => next(err));
    }
}

module.exports = new RideController(rideFacade);