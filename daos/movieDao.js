const mongoose = require('mongoose')
const movieModel = require('../models/movieModel')

const createMovie = movie =>
    movieModel.create(movie)

const findAllMovies = () =>
    movieModel.find()

const findMovieByImdbID = imdbID =>
    movieModel.findOne({imdbID: imdbID})

module.exports = {
    findAllMovies,
    findMovieByImdbID,
    createMovie
}