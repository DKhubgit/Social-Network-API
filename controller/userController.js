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
            .populate('friends')
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
    },
    createUser(req,res) {
        User.create(req.body, function(err, user) {
            if (err) {
                res.status(500).json({message: "Create Error!"});
            } else {
                res.status(200).json(user);
            }
        })
    },
    updateUser(req,res) {
        User.findOneAndUpdate({_id: req.params.userId}, req.body, {new: true}, function(err, user) {
            if (err) {
                res.status(500).json({message: "Update Error!"});
            } else {
                res.status(200).json(user);
            }
        });
    },
    deleteUser(req,res) {
        User.findOneAndDelete({_id: req.params.userId}, function(err, results) {
            if (err) {
                res.status(500).json({message: "Delete Error!"});
            } else {
                res.status(200).json({ results, message: "Deleted"})
            }
        })
    },
    addfriend(req,res) {
        if (req.params.userId === req.params.friendId) {
            res.json({message: "Friends count as someone other than yourself!"})
        } else {
            User.findOneAndUpdate(
                {_id: req.params.userId},
                {$addToSet: { friends: req.params.friendId}},
                {new: true},
                function(err, user) {
                    if (err) {
                        res.status(500).json({message: "Adding Friend Error!"});
                    } else {
                        res.status(200).json(user);
                    }
                })
        }
    },
    deleteFriend(req,res) {
        User.findOne(
            {_id: req.params.userId}, function(err, user) {
                if (err) {
                    res.status(500).json({message: "finding Friend in 'deleteFriend' Error!"});
                } else {
                    if(user) {
                        user.friends.pull({_id: req.params.friendId});
                        user.save();
                        res.status(200).json(user);
                    } else {
                        res.status(404).json({message: "could not find user!"})
                    }
                }
            });
    }
}