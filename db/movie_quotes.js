const quotes = {
    getAllQuotes: `SELECT * FROM movie_quotes ORDER BY id ASC`,
    getQuoteById: `SELECT * FROM movie_quotes WHERE id = $1`,
    addQuote: `INSERT INTO movie_quotes (quote, author, actor, movie_id) VALUES ($1, $2, $3, $4) RETURNING id`
}

module.exports = quotes