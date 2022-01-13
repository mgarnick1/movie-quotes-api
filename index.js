const express = require("express");
require('dotenv').config()
const bodyParser = require("body-parser");
const app = express();
const db = require('./queries')
const port = 3001;


app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get("/", (req, res) => {
  res.json({ info: "Node.js, Express, and Postgres API" });
});

app.get('/quotes', db.getQuotes)
app.get('/quotes/:id', db.getQuoteById)
app.post('/quotes/add', db.addQuote)
app.post('/movie/add', db.addMovie)

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
})
