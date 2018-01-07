var express = require('express');
var app = express();
var bodyParser = require('body-parser')
const request = require('request');
const MongoClient = require('mongodb').MongoClient;

/*
 * Parsers for json and application/x-www-form-urlencoded
 */
app.use(bodyParser.urlencoded({
    extended: false
}))

app.use(bodyParser.json())

/*
 * --------------------------------------------------------------------------------
 * Routes
 * --------------------------------------------------------------------------------
 */
let userProfile = require('./routes/user_profile'); // Template routes

/*
 * --------------------------------------------------------------------------------
 * Database
 * --------------------------------------------------------------------------------
 */
let database = require('./lib/database');

app.get('/', function (req, res) {
    res.send('Hello World');
})

app.post('/store_my_picture', userProfile.profilePicture); // Store user picture
app.post('/store_my_username', userProfile.profileUsername); // Store username

//Mongodb connection and serve start
MongoClient.connect('mongodb://anhar:anhar@ds247047.mlab.com:47047/jc_test', (err, mongoDb) => {
    if (err) return console.log(err);
    database.setMongoDatabase(mongoDb.db('jc_test'));    
    app.listen(3000, () => {
        console.log('listening on 3000')
    })
})