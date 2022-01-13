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

module.exports = {
  getQuotes,
  getQuoteById,
  addQuote,
  addMovie,
};
