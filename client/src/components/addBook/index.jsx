import React, { useState } from 'react';
import './addBook.css';

export function AddBook() {
  const [author, setAuthor] = useState('');
  const [title, setTitle] = useState('');
  const [company, setCompany] = useState('');
  const [coection, setCoection] = useState('');
  const [category, setCategory] = useState('');
  const [remark, setRemark] = useState('');
  const [review, setReview] = useState('');
  const [year, setYear] = useState(0);
  const [price, setPrice] = useState(0);
  const [ranking, setRanking] = useState(0);
  const [complete, setComplete] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('/api', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          author,
          title,
          company,
          coection,
          category,
          remark,
          review,
          year,
          price,
          ranking,
          complete
        })
      });
      // eslint-disable-next-line no-unused-vars
      // const resJson = await res.json();
      if (res.status === 200) {
        setAuthor('');
        setTitle('');
        setCompany('');
        setCoection('');
        setCategory('');
        setRemark('');
        setReview('');
        setYear(0);
        setPrice(0);
        setRanking(0);
        setComplete(false);
        setMessage('Book created successfully');
      } else {
        setMessage('Some error occured');
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="add-form">
      <h3 className="add-form__title">Add New Book</h3>
      <form onSubmit={handleSubmit} className="add-form__form">
        <label htmlFor="title">
          Title:
          {' '}
          <input
            id="title"
            type="text"
            value={title}
            placeholder="Título"
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>

        <label htmlFor="author">
          Author:
          {' '}
          <input
            id="author"
            type="text"
            value={author}
            placeholder="Autor"
            onChange={(e) => setAuthor(e.target.value)}
          />
        </label>

        <label htmlFor="company">
          Editorial:
          {' '}
          <input
            id="company"
            type="text"
            value={company}
            placeholder="Editorial"
            onChange={(e) => setCompany(e.target.value)}
          />
        </label>

        <label htmlFor="collection">
          Collection:
          {' '}
          <input
            id="collection"
            type="text"
            value={coection}
            placeholder="Colección"
            onChange={(e) => setCoection(e.target.value)}
          />
        </label>

        <label htmlFor="category">
          Category:
          {' '}
          <input
            id="category"
            type="text"
            value={category}
            placeholder="Categoria"
            onChange={(e) => setCategory(e.target.value)}
          />
        </label>

        <label htmlFor="year">
          Year:
          {' '}
          <input
            id="year"
            type="number"
            value={year}
            placeholder="Año"
            onChange={(e) => setYear(e.target.value)}
          />
        </label>

        <label htmlFor="price">
          Price:
          {' '}
          <input
            id="price"
            type="number"
            value={price}
            placeholder="Reseña"
            onChange={(e) => setPrice(e.target.value)}
          />
        </label>

        <label htmlFor="ranking">
          Ranking:
          {' '}
          <input
            id="ranking"
            type="number"
            value={ranking}
            min="0"
            max="5"
            placeholder="ranking"
            onChange={(e) => setRanking(e.target.value)}
          />
        </label>

        <label htmlFor="complete">
          Completed:
          {' '}
          <input
            id="complete"
            type="checkbox"
            value={complete}
            onChange={() => setComplete(!complete)}
          />
        </label>

        <label htmlFor="remark">
          Remark:
          {' '}
          <input
            id="remark"
            type="text"
            value={remark}
            placeholder="Comentarios"
            onChange={(e) => setRemark(e.target.value)}
          />
        </label>

        <label htmlFor="review">
          Review:
          {' '}
          <input
            id="review"
            type="text"
            value={review}
            placeholder="Reseña"
            onChange={(e) => setReview(e.target.value)}
          />

        </label>

        <button type="submit">Create</button>

        <div className="message">{message ? <p>{message}</p> : null}</div>
      </form>
    </div>
  );
}

export default AddBook;
