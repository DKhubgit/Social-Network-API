const router = require('express').Router();
//grab the route action functions from controller
const { 
    getAllThoughts,
    getOneThought,
    createThought,
    updateThought,
    deleteThought,
} = require('../../controller/thoughtController');

router.route('/').get(getAllThoughts).post(createThought)

router.route('/:thoughtId')
    .get(getOneThought)
    .put(updateThought)
    .delete(deleteThought)

module.exports = router;