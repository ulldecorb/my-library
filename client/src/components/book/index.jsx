import React from 'react';
import PropTypes from 'prop-types';
import './book.css';
import { Link } from 'react-router-dom';

export function Book({ book }) {
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
      console.log(err);
    }
  };

  return (
    <article className="book">
      <h2 className="book__title">
        Title:
        {' '}
        {book.title}
      </h2>
      <h3 className="book_author">
        Author:
        {' '}
        {book.author}
      </h3>
      <h3 className="book_author">
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
        Ranking:
        {' '}
        {book.ranking}
      </h3>
      <h3 className="book_author">
        {book.price}
      </h3>
      <h3 className="book_author">
        Collection
        {' '}
        {book.complete ? 'complete' : 'incomplete'}
      </h3>
      <button onClick={handleDeleteBook} type="button" className="book__delete-handler">Delete</button>
      <Link to="/update">Update</Link>
    </article>
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
  }).isRequired
};

export default Book;
