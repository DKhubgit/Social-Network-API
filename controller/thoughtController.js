const { Thought } = require('../model')

module.exports = {
    getAllThoughts(req,res) {
        Thought.find({}, function(err, thoughts) {
            if (err) {
                res.status(500).json({message: "Find all thoughts error!"});
            } else {
                res.status(200).json(thoughts);
            }
        })
    },
}