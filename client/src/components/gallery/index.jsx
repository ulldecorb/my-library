import React from 'react';
import PropTypes from 'prop-types';

export function Gallery({ library }) {
  return (
    <section className="gallery">
      <h1 className="title">Library</h1>
      {!library ? <h2>Loading...</h2>
        : library.map((book) => (
          <article className="book" key={`gallery${book.title}`}>
            <h2 className="title">{book.title}</h2>
          </article>
        ))}
    </section>
  );
}

Gallery.propTypes = {
  library: PropTypes.arrayOf(
    PropTypes.shape({
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
    })
  ).isRequired
};

export default Gallery;
