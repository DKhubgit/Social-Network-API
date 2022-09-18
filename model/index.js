//consolidates models into this index.js file for less importing

const User = require('./User');
const Thought = require('./Thought');

module.exports = { User, Thought };