const quotes = {
    getAllQuotes: `SELECT * FROM movie_quotes ORDER BY id ASC`,
    getQuoteById: `SELECT * FROM movie_quotes WHERE id = $1`,
    addQuote: `INSERT INTO movie_quotes (quote, author, actor, movie_id) VALUES ($1, $2, $3, $4) RETURNING id`,
    updateQuote: `UPDATE movie_quotes SET quote = $1, author = $2, actor = $3, movie_id = $4 WHERE id = $5`
}

module.exports = quotes