const mongoose = require('mongoose')
const movieSchema = require('./movieSchema')

const movieModel = mongoose.model('MovieModel', movieSchema)

module.exports = movieModel;