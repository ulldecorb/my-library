// const jest = require('jest');
const {
  getAll
//   createOne,
//   getById,
//   updateById,
//   deleteById
} = require('./bookController')();
// const Book = require('../models/bookModel');
const bookController = require('./bookController');

jest.mock('../model/bookModel');

describe('getAll', () => {
  test('shoud get all lessons', async () => {
    const res = {
      json: jest.fn()
    };
    bookController.find.mockResolvedValueOnce([{ title: 'random' }]);

    await getAll(null, res);

    expect(res.json).toHaveBeenCalledWith([{ title: 'random' }]);
  });
});
