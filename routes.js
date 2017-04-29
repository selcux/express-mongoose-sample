const Router = require('express').Router;
const router = new Router();

const driver = require('./model/driver/router');
const ride = require('./lib/ride/router');

router.route('/').get((req, res) => {
    res.json({message: 'Welcome to express-mongoose-sample API!'});
});

router.use('/driver', driver);
router.use('/ride', ride);

module.exports = router;
