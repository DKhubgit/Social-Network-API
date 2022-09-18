const mongoose = require('mongoose');

const thoughtSchema = new mongoose.Schema( {
    thoughtText: {
        type: String,
        required: true,
        minLength: [1, "Please add something!"],
        maxLength: [280, "Text is too large!"],
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    username: {
        type: String,
        required: true,
    },
    reactions: [reactionSchema],
},
{
    toJson: {
        virtuals: true,
    },
});

//virtual getter for number of reactions, will not persist in DB.
thoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
})

//schema for subdocument
const reactionSchema = new mongoose.Schema({
    reactionId: {
        type: mongoose.Types.ObjectId, //only the type
        default: new mongoose.Types.ObjectId(), //creates a new id
    },
    reactionBody: {
        type: String,
        required: true,
        maxLength: [280, "Too large of a text"],
    },
    username: {
        type: String,
        required: true,
    },
},
{
    //only appends the 'createdAt' timestamp
    timestamps: {
        createdAt: true,
        updatedAt: false
    }
})

const Thought = mongoose.model('thought', thoughtSchema);

module.exports = Thought;

