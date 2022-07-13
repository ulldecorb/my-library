const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  company: {
    type: String
  },
  colection: {
    type: String
  },
  year: {
    type: Number
  },
  price: {
    type: Number
  },
  ranking: {
    type: Number,
    default: 0
  },
  complete: {
    type: Boolean,
    default: false
  },
  category: {
    type: String,
    default: 'sin clasificar'
  },
  remark: {
    type: String
  },
  review: {
    type: String
  }

});

module.exports = mongoose.model('Book', BookSchema);
