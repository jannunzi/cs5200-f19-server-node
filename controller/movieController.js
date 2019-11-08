const movieDao = require('../daos/movieDao')

module.exports = function(app) {

    // const movies = [
    //     {Title: 'Avatar', imdbID: '123'},
    //     {Title: 'Avatar 2', imdbID: '234'},
    //     {Title: 'Kingdom of Heaven', imdbID: '345'}
    // ]



    app.post('/api/movies', (req, res) => {
        const movie = req.body;
        console.log(movie);
        movieDao.createMovie(movie)
            .then(movie => {
                return movieDao.findAllMovies()
            })
            .then(movies => res.json(movies))
    })

    app.get('/api/movies', function (req, res) {
        movieDao.findAllMovies()
            .then(movies => {
                res.json(movies)
            })
    })

    app.get('/api/movies/:imdbID', function (req, res) {
        const imdbID = req.params['imdbID']
        console.log(imdbID)
        movieDao.findMovieByImdbID(imdbID)
            .then(movie => {
                res.json(movie)
            })
    })

}

