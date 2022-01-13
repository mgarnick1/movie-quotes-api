const movies = {
    getAllMovies: `SELECT * from movies ORDER BY id ASC`,
    addMovie: `INSERT INTO movies (name, year) VALUES ($1, $2) RETURNING id`
}

module.exports = movies