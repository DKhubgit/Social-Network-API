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
    getOneUser(req,res) {
        User.findOne({_id: req.params.userId})
            .select('-__v')
            .populate('thoughts')
            .then( function(user) {
                if (user) {
                    res.status(200).json(user);
                } else {
                    res.status(404).json({message: "Did not find requested user."})
                }
            })
            .catch( (err) => { 
                res.status(500).json({message: "findOne Error!"});
            });
    }
}