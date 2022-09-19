const router = require('express').Router();
//grab the route action functions from controller
const { 
    getAllThoughts,
} = require('../../controller/thoughtController');

router.route('/').get(getAllThoughts);

module.exports = router;