const userModel = require('../models/userModel');

function createUser(user) {
    return userModel.create(user)
}

function findAllUsers() {
    return userModel.find()
}

function findUserById(userId) {
    return userModel.findById(userId)
}

const findUserByUsername = username =>
    userModel.findOne({username: username})

module.exports = {
    createUser,
    findAllUsers,
    findUserById,
    findUserByUsername
}