const { User } = require('../model')

module.exports = {
    getAllUsers(req,res) {
        User.find({}, function(err, users) {
            if (err) {
                res.status(500).json({ message: "could not find users..."});
            } else {
                res.status(200).json(users);
            }
        })
    },
}