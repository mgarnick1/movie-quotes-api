const { pool } = require("./pool");
const quotes = require("./db/movie_quotes");
const movies = require("./db/movies");

const getQuotes = (req, res) => {
  pool.query(quotes.getAllQuotes, (err, results) => {
    if (err) {
      throw err;
    }
    res.status(200).json(results.rows);
  });
};

const getQuoteById = (req, res) => {
  const id = +req.params.id;
  pool.query(quotes.getQuoteById, [id], (err, results) => {
    if (err) {
      throw err;
    }
    res.status(200).json(results.rows);
  });
};

const addQuote = (req, res) => {
  const { quote, author, actor, movie_id } = req.body;
  pool.query(
    quotes.addQuote,
    [quote, author, actor, movie_id],
    (err, results) => {
      if (err) {
        throw err;
      }
      res
        .status(201)
        .send(`Quote successfully added with ID: ${results.rows[0].id}`);
    }
  );
};

addMovie = (req, res) => {
  const { name, year } = req.body;
  pool.query(movies.addMovie, [name, year], (err, results) => {
    if (err) {
      throw err;
    }
    res.status(201).send(`Movie Added with ID: ${results.rows[0].id}`);
  });
};

getAllMovies = (req, res) => {
  pool.query(movies.getAllMovies, (err, results) => {
    if (err) {
      throw err;
    }
    res.status(200).json(results.rows);
  });
};

updateQuote = (req, res) => {
    const id = +req.params.id
    const { quote, author, actor, movie_id } = req.body
    pool.query(quotes.updateQuote, [quote, author, actor, movie_id, id], (err, results) => {
        if(err) {
            throw err;
        }
        res.status(200).send(`Quote ID: ${id} updated successfully`)
    })
}

deleteQuote = (req, res) => {
    const id = +req.params.id
    pool.query(quotes.deleteQuote, [id], (err, results) => {
        if(err) {
            throw err;
        }
        res.status(200).send(`Quote ID: ${id} was deleted`)
    })
}

module.exports = {
  getQuotes,
  getQuoteById,
  addQuote,
  addMovie,
  getAllMovies,
  updateQuote,
  deleteQuote
};
