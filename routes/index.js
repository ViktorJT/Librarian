const express = require('express');
const router  = express.Router();
const Book = require('../models/Book.model');

router.get('/', (_, res) => {
  Book.find()
    .then(books => res.render('index', {books}))
    .catch(err => console.error(`error finding books: ${err}`))
});

router.get('/delete/:id', (req, res) => {
  const { id } = req.params;
  Book.findByIdAndDelete(id)
    .then(books => res.render('index', {books}))
    .catch(err => console.error(`error finding books: ${err}`))
});

module.exports = router;
