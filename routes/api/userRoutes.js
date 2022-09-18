const router = require('express').Router();
//grab route action functions from controller
const { 
    getAllUsers, 
    getOneUser,
    createUser,
    updateUser,
    deleteUser, 
} = require('../../controller/userController')

router.route('/').get(getAllUsers).post(createUser);

router.route('/:userId').get(getOneUser).put(updateUser).delete(deleteUser);

module.exports = router;