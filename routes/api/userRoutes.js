const router = require('express').Router();
//grab route action functions from controller
const { 
    getAllUsers, 
    getOneUser,
    createUser,
    updateUser, 
} = require('../../controller/userController')

router.route('/').get(getAllUsers).post(createUser);

router.route('/:userId').get(getOneUser).put(updateUser);

module.exports = router;