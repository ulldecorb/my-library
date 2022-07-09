const { Router } = require('express');
const bookController = require('../controllers/bookController')();

function bookRouter() {
  const routes = Router();

  routes('/')
    .get(bookController.getAll);

  return routes;
}

module.exports = bookRouter();
