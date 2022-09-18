const router = require('express').Router();
//grab route action functions from controller
const { getAllUsers, getOneUser } = require('../../controller/userController')

router.route('/').get(getAllUsers);

router.route('/:userId').get(getOneUser);

module.exports = router;