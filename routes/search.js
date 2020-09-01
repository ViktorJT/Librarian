const express = require('express');
const router  = express.Router();
const Book = require('../models/Book.model');
const mongoose = require('mongoose');
const axios = require('axios').default;

router.get('/q', (req, res) => {
  const { search } = req.query;
  axios
    .get(`https://www.googleapis.com/books/v1/volumes/?q=intitle:${search}&printType=books&fields=items(id,volumeInfo(title,subtitle,authors,publisher,publishedDate,description,industryIdentifiers,categories,averageRating,ratingsCount,imageLinks))&key=${process.env.API_KEY}`)
    .then(results => {
      res.render('search-results', results.data)
  }).catch(err => console.error(err))
});

router.post('/:id/create', (req, res) => {
  const { id } = req.params;
  axios
    .get(`https://www.googleapis.com/books/v1/volumes/${id}?printType=books&fields=id,volumeInfo(title,subtitle,authors,publisher,publishedDate,description,industryIdentifiers,categories,averageRating,ratingsCount,imageLinks)&key=${process.env.API_KEY}`)
    .then(results => {
      Book.create({
        id: results.data.id,
        title: results.data.volumeInfo.title,
        subtitle: results.data.volumeInfo.subtitle,
        authors: results.data.volumeInfo.authors,
        publisher: results.data.volumeInfo.publisher,
        publishedDate: results.data.volumeInfo.publishedDate,
        description: results.data.volumeInfo.description,
        isbn13: results.data.volumeInfo.industryIdentifiers[1].identifier,
        categories: results.data.volumeInfo.categories,
        averageRating: results.data.volumeInfo.averageRating,
        imageLinks: results.data.volumeInfo.imageLinks,
      })
      .then(() => {
        console.log(`book with id: ${id} added to DB`);
        // mongoose.disconnect();
      })
      .catch(err => console.error(`error adding book with id: ${id} to DB`))
      .finally(res.redirect('/'))
    })
    .catch(err => console.error(`error finding book with id: ${id}`))
});

module.exports = router;
