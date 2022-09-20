const mongoose = require('mongoose');

//schema for subdocument, must initialize first before appending to thought Schema
const reactionSchema = new mongoose.Schema({
    reactionId: {
        type: mongoose.Schema.Types.ObjectId, //only the type
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
    createdAt: {
        type: Date,
        default: Date.now,
    }
},
{
    _id: false,
});

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
    id: false,
});

//virtual getter for number of reactions, will not persist in DB.
thoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
})

const Thought = mongoose.model('thought', thoughtSchema);

module.exports = Thought;

