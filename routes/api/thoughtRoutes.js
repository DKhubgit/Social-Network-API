const router = require('express').Router();
//grab the route action functions from controller
const { 
    getAllThoughts,
    getOneThought,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
} = require('../../controller/thoughtController');

router.route('/').get(getAllThoughts).post(createThought)

router.route('/:thoughtId')
    .get(getOneThought)
    .put(updateThought)
    .delete(deleteThought)

router.route('/:thoughtId/reactions').post(addReaction)

module.exports = router;