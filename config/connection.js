const { connect, connection } = require('mongoose');

connect("mongodb://localhost/socialNetAPI", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

module.exports = connection;