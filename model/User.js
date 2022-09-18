const mongoose = require('mongoose');

const userSchema = new mongoose.Schema( {
    username: { 
        type: String, 
        unique: true, 
        required: true, 
        trim: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        match: [/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/, "Please provide a valid email!"],
    },
    thoughts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Thought',
    }],
    friends: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
},
{
    toJSON: {
        virtuals: true,
    },
    id: false,
})

//virtual getter for number of friends, will not persist in DB.
userSchema.virtual('friendCount').get(function() {
    return this.friends.length;
});

const User = mongoose.model('user', userSchema);

module.exports = User;