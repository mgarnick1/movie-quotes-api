const { pool } = require("./pool");
const quotes = require("./db/movie_quotes");

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

module.exports = {
  getQuotes,
  getQuoteById
};
