const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  author: {
    type: Array,
    required: true
  },
  company: {
    type: String
  },
  collection: {
    type: String
  },
  year: {
    type: Number
  },
  price: {
    type: Number
  },
  ranking: {
    type: Number
  },
  complete: {
    trype: Boolean
  },
  category: {
    type: String
  }

});

module.exports = mongoose.model('Book', BookSchema);
