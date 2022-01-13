const quotes = {
    getAllQuotes: `SELECT * FROM movie_quotes ORDER BY id ASC`,
    getQuoteById: `SELECT * FROM movie_quotes WHERE id = $1`
}

module.exports = quotes