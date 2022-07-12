import React from 'react';
import PropTypes from 'prop-types';
import { Book } from '../book';
import './gallery.css';

export function Gallery({ library }) {
  return (
    <ol className="gallery">
      {!library ? <h2>Loading...</h2>
        : library.map((book, index) => (
          <Book book={book} index={index} key={`gallery-${book.title}`} />
        ))}
    </ol>
  );
}

Gallery.propTypes = {
  library: PropTypes.arrayOf(
    PropTypes.shape({
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
    })
  ).isRequired
};

export default Gallery;
