
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/movies');
var express = require('express')
var app = express()
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())



app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin",
        "*");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods",
        "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Credentials", "true");
    next();
});



const movieController = require('./controller/movieController')

movieController(app)

app.listen(4000)


//
// const userDao = require('./daos/userDao')
//
// userDao.findUserById("5dba2bcb024d325ce400750a")
//     .then(c => console.log(c))
//
// userDao.findUserByUsername("ed")
//     .then(ed => console.log(ed))

// userDao.createUser({
//     username: 'frank',
//     firstName: 'Frank',
//     lastName: 'Herbert'
// })
//     .then(authorOfDune => {
//         console.log(authorOfDune)
//         return userDao.findAllUsers()
//     })
//     .then(users => {
//         console.log(users);
//         return userDao.findUserById("5dba2f7a145a7a5db13ab53c")
//     })
//     .then(frank => console.log(frank), error => console.log(error))
// const userSchema = mongoose.Schema({
//     username: String,
//     firstName: String,
//     lastName: String,
//     salary: Number,
//     dob: Date
// }, {collection: 'users'});
//
// const userModel = mongoose.model("UserModel", userSchema);
//
// userModel.create({
//     username: 'ed',
//     firstName: 'Edward',
//     lastName: 'Norton'
// })
//     .then(doc => {
//         console.log(doc)
//         return userModel.find()
//     })
//     .then(users => {
//         console.log(users)
//         console.log("hello world!!!")
//         return userModel.find({username: 'ada'})
//     })
//     .then(users => console.log(users))

