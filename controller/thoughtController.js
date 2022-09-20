const { Thought, User } = require('../model')

module.exports = {
    getAllThoughts(req,res) {
        Thought.find({}, function(err, thoughts) {
            if (err) {
                res.status(500).json({message: "Find all thoughts error!"});
            } else {
                res.status(200).json(thoughts);
            }
        });
    },
    getOneThought(req,res) {
        Thought.findOne({_id: req.params.thoughtId}, function(err, thought) {
            if (err) {
                res.status(500).json({message: "Find one thought Error"});
            } else {
                res.status(200).json(thought);
            }
        }); 
    },
    createThought(req,res) {
        Thought.create({ thoughtText: req.body.thoughtText, username: req.body.username,},
            function(err, thought) {
                if (err) {
                    res.status(500).json({message: "Creating Thought Error"});
                } else {
                    User.findOneAndUpdate(
                        {_id: req.body.userId},
                        {$addToSet: { thoughts: thought._id }},
                        {new: true},
                        function(err, user) {
                            if (err) {
                                res.status(500).json({message: "Adding thought to user error!"});
                            } else {
                                res.status(200).json(user);
                            }
                    });
                }
            });
    },
    updateThought(req,res) {
        Thought.findOneAndUpdate(
            {_id: req.params.thoughtId},
            { thoughtText: req.body.thoughtText },
            {new: true},
            function(err, thought) {
                if (err) {
                    res.status(500).json({message: "Update thought Error"});
                } else {
                    res.status(200).json(thought);
                }
            }
        );
    },
    deleteThought(req,res) {
        Thought.findOneAndDelete({_id: req.params.thoughtId}, function(err, result) {
            if (err) {
                res.status(500).json({message: "Delete thought error!"})
            } else {
                res.status(200).json({ result, message: "Deleted!"});
            }
        })
    },
    addReaction(req,res) {
        Thought.findOneAndUpdate(
            {_id: req.params.thoughtId},
            {$addToSet: {reactions: req.body }},
            {new: true},
            function(err, thought) {
            if (err) {
                res.status(500).json({message: "Find Thought error"});
            } else {
                res.status(200).json(thought);
            }
        })
    },
    deleteReaction(req,res) {
        Thought.findOne({_id: req.params.thoughtId}, function(err, thought) {
            if (err) {
                res.status(500).json({message: "Finding Thought error"});
            } else {
                if (thought) {
                    thought.reactions.pull({reactionId: req.body.reactionId})
                    thought.save();
                    res.status(200).json({thought, message: "Deleted reaction!"});
                } else {
                    res.status(404).json({message: "Could not find thought"});
                }
            }
        })
    }
}