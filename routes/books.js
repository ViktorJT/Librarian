const express = require('express');
const router  = express.Router();
const Book = require('../models/Book.model');

router.get('/', (_, res) => {
  Book.find()
    .then(books => res.render('index', {books}))
    .catch(err => console.error(`error finding books: ${err}`))
});

router.get('/:title', (req, res) => {
  const {title} = req.params
  Book.find({ title })
    .then(book => res.render(`book-detail`, {book}))
    .catch(err => console.error(`error finding book: ${err}`))
});

router.post('/:id/delete', (req, res) => {
  const { id } = req.params;
  Book.findByIdAndDelete(id)
    .then(res.redirect('/'))
    .catch(err => console.error(`error finding books: ${err}`))
});

router.post('/:id/borrow', (req, res) => {

  if (!req.user || !res.locals.login) {
    res.redirect('/log-in'); // not logged-in
    return;
  }

  const { id } = req.params;
  Book.findById(id)
    .then(book => {
      book.borrowStatus = !book.borrowStatus;
      book.borrower = req.user.username;
      book.save();
      req.logout();
      res.redirect('/');
    })
    .catch(err => console.error(`error borrowing book: ${err}`))
});


module.exports = router;
