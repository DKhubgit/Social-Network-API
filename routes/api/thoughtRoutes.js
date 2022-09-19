const router = require('express').Router();
//grab the route action functions from controller
const { 
    getAllThoughts,
    getOneThought,
    createThought,
    updateThought,
} = require('../../controller/thoughtController');

router.route('/').get(getAllThoughts).post(createThought)

router.route('/:thoughtId').get(getOneThought).put(updateThought)

module.exports = router;