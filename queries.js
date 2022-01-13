const { pool } = require("./pool");

const getQuotes = (req, res) => {
  pool.query(
    "SELECT * FROM movie_quotes ORDER BY id ASC",
    (err, results) => {
      if (err) {
        throw err;
      }
      res.status(200).json(results.rows);
    }
  );
};

module.exports = {
  getQuotes,
};
