import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
// import { Detail } from '../detail';
import './book.css';

export function Book({ book, index }) {
  // eslint-disable-next-line no-underscore-dangle
  const id = book._id;

  const handleDeleteBook = async (e) => {
    e.preventDefault();
    try {
      // eslint-disable-next-line no-underscore-dangle
      const res = await fetch(`/api/${book._id}`, {
        method: 'DELETE'
      });
      if (res.status === 200) {
        console.log('Delete succesfully');
      } else {
        console.log('Delete failed');
        // eslint-disable-next-line no-underscore-dangle
        console.log(book._id);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <li className="book">
      <h2 className="book__index">{index + 1}</h2>
      <h2 className="book__title">
        {book.title}
      </h2>
      <h3 className="book__author">
        {book.author}
      </h3>
      <h3 className="book__ranking">
        {book.ranking}
      </h3>
      {/* Resta de posibles columnes a mostrar */}
      {/* <h3 className="book_author">
        Editorial:
        {' '}
        {book.company}
      </h3>
      <h3 className="book_author">
        Year:
        {' '}
        {book.year}
      </h3>
      <h3 className="book_author">
        Collection:
        {' '}
        {book.colection}
      </h3>
      <h3 className="book_author">
        {book.price}
      </h3>
      <h3 className="book_author">
        Collection
        {' '}
        {book.complete ? 'complete' : 'incomplete'}
      </h3> */}
      <Link className="book__update-link" to={`/update/${id}`}>Update</Link>
      {/* <Detail book={book} /> */}
      <button onClick={handleDeleteBook} type="button" className="book__delete-handler">Delete</button>
    </li>
  );
}

Book.propTypes = {
  book: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    company: PropTypes.string,
    colection: PropTypes.string,
    year: PropTypes.number,
    price: PropTypes.number,
    ranking: PropTypes.number,
    complete: PropTypes.bool,
    category: PropTypes.string,
    remark: PropTypes.string,
    review: PropTypes.string
  }).isRequired,
  index: PropTypes.number.isRequired
};

export default Book;
