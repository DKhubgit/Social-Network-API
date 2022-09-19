const router = require('express').Router();
//grab route action functions from controller
const { 
    getAllUsers, 
    getOneUser,
    createUser,
    updateUser,
    deleteUser,
    addfriend,
    deleteFriend, 
} = require('../../controller/userController')

router.route('/').get(getAllUsers).post(createUser);

router.route('/:userId').get(getOneUser).put(updateUser).delete(deleteUser);

router.route('/:userId/friends/:friendId').post(addfriend).delete(deleteFriend);

module.exports = router;