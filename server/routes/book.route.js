const { Router } = require('express');
const bookController = require('../controllers/bookController')();

function bookRouter() {
  const routes = Router();

  routes
    .route('/api')
    .get(bookController.getAll)
    .post(bookController.createOne);

  routes
    .route('/api/:bookID')
    .delete(bookController.deleteById)
    .get(bookController.getById)
    .put(bookController.updateById);

  return routes;
}

module.exports = bookRouter();
