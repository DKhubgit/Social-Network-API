const express = require('express');
//we need a db connection
const db = require('./config/connection');
const routes = require('./routes');

const app = express();
const PORT = 5000;

//middleware for url and object conversion
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(routes)

db.once("open", () => {
    app.listen(PORT, () => {
        console.log(`Listening on port ${PORT}!`);
    })
})

