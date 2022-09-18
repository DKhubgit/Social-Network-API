const router = require('express').Router();
//grab route action functions from controller
const { 
    getAllUsers, 
    getOneUser,
    createUser, 
} = require('../../controller/userController')

router.route('/').get(getAllUsers).post(createUser);

router.route('/:userId').get(getOneUser);

module.exports = router;