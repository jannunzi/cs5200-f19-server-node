const mongoose = require('mongoose')

const movieSchema = mongoose.Schema({
    Title: String,
    imdbID: String
}, {collection: 'movies'})

module.exports = movieSchema;