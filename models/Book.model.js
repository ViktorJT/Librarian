const { Schema, model } = require('mongoose');

const bookSchema =  new Schema(
  {
    id: {
      type: String,
      required: true,
      unique: true
    },
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String
    },
    authors: {
      type: [String],
      required: true,
    },
    publisher: {
      type: String,
      required: true
    },
    publishedDate: {
      type: Date,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    isbn13: {
      type: String
    },
    categories: {
      type: [String]
    },
    averageRating: {
      type: Number
    },
    ratingsCount: {
      type: Number
    },
    // I wonder if there are better apis to get book covers from? OpenLibrary, maybe?
    // Setting the value to an empty object sets it as a mixed type, I think?Which means that anything can go inside it. Docs are a bit unclear tho
    imageLinks: {},
    rentStatus: {
      type: Boolean,
      default: false,
      required: true
    },
    rentDate: {
      type: Date,
    },
    renter: {
      // for now leaving it as type: String, but this will later be the objectId of the user who rents the book
      type: String
    },
    owner: {
      // for now leaving it as type: String, but this will later be the objectId of the user who owns the book
      type: String,
      default: 'AKQA',
      required: true
    }
  },
  {
    timestamps: true
  }
)

module.exports = model('Book', bookSchema);
