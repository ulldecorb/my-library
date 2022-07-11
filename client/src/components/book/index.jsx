import React from 'react';
import PropTypes from 'prop-types';
import './book.css';

export function Book({ book }) {
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
      <h3 className="book_author">{book.company}</h3>
      <h3 className="book_author">{book.year}</h3>
      <h3 className="book_author">{book.coection}</h3>
      <h3 className="book_author">{book.ranking}</h3>
    </article>
  );
}

Book.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    company: PropTypes.string,
    coection: PropTypes.string,
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