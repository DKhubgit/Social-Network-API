const router = require('express').Router();
//grab route action functions from controller
const { getAllUsers } = require('../../controller/userController')

router.route('/').get(getAllUsers)

module.exports = router;