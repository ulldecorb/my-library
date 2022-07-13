import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// import PropTypes from 'prop-types';
import './detail.css';

export function Detail() {
  const { bookId } = useParams();
  const [book, setBook] = useState({ algo: 'sera' });
  const [id, setId] = useState(bookId);
  const [author, setAuthor] = useState('');
  const [title, setTitle] = useState('');
  const [company, setCompany] = useState('');
  const [colection, setColection] = useState('');
  const [category, setCategory] = useState('');
  const [remark, setRemark] = useState('');
  const [review, setReview] = useState('');
  const [year, setYear] = useState(undefined);
  const [price, setPrice] = useState(undefined);
  const [ranking, setRanking] = useState(undefined);
  const [complete, setComplete] = useState(false);
  const [message, setMessage] = useState('');

  console.log('bookId PARAM ::', bookId);

  // const newBook = (bookObject) => {
  //   // eslint-disable-next-line no-underscore-dangle
  //   setId(bookId);
  //   setAuthor(bookObject.author);
  //   setTitle(bookObject.title);
  //   setCompany(bookObject.company);
  //   setColection(bookObject.colection);
  //   setCategory(bookObject.category);
  //   setRemark(bookObject.remark);
  //   setReview(bookObject.review);
  //   setYear(bookObject.year);
  //   setPrice(bookObject.price);
  //   setRanking(bookObject.ranking);
  //   setComplete(bookObject.complete);

  //   console.log('book on function:: ', book);
  // };

  const getBookById = async () => {
    await fetch(`/api/${bookId}`)
      .then((res) => res.json())
      .then((data) => {
        setBook(data);
        // eslint-disable-next-line no-underscore-dangle
        setId(data._id);
        setAuthor(data.author);
        setTitle(data.title);
        setCompany(data.company);
        setColection(data.colection);
        setCategory(data.category);
        setRemark(data.remark);
        setReview(data.review);
        setYear(data.year);
        setPrice(data.price);
        setRanking(data.ranking);
        setComplete(data.complete);
      });
  };

  useEffect(() => {
    getBookById();
    console.log('book on useEffect:: ', book);
  }, []);

  const handleSubmitUpdate = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`/api/${bookId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          author,
          title,
          company,
          colection,
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
        setColection('');
        setCategory('');
        setRemark('');
        setReview('');
        setYear(0);
        setPrice(0);
        setRanking(0);
        setComplete(false);
        setMessage('Book updated successfully');
      } else {
        setMessage('Some error occured');
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="add-form">
      <h3 className="add-form__title">{id}</h3>
      <form onSubmit={handleSubmitUpdate} className="add-form__form">
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
            value={colection}
            placeholder="Colección"
            onChange={(e) => setColection(e.target.value)}
          />
        </label>

        <label htmlFor="category">
          Category:
          {' '}
          {/* <input
            id="category"
            type="text"
            value={category}
            placeholder="Categoria"
            onChange={(e) => setCategory(e.target.value)}
          /> */}
          <select name="" id="category">
            <option value="American superheroes">American superheroes</option>
            <option value="American independent">American independent</option>
            <option value="Manga">Manga</option>
            <option value="European">European</option>
            <option value="No Category">No Category</option>
          </select>
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
          {/* <input
            id="remark"
            type="text"
            value={remark}
            placeholder="Comentarios"
            onChange={(e) => setRemark(e.target.value)}
          /> */}
          <textarea
            id="remark"
            value={remark}
            placeholder="Comentarios"
            onChange={(e) => setRemark(e.target.value)}
          />
        </label>

        <label htmlFor="review">
          Review:
          {' '}
          <textarea
            id="review"
            value={review}
            placeholder="Reseña"
            onChange={(e) => setReview(e.target.value)}
          />
        </label>

        <button type="submit">Update</button>

        <div className="message">{message ? <p>{message}</p> : null}</div>
      </form>
    </div>
  );
}

// Detail.propTypes = {
//   book: PropTypes.shape({
//     _id: PropTypes.string.isRequired,
//     title: PropTypes.string.isRequired,
//     author: PropTypes.string.isRequired,
//     company: PropTypes.string,
//     colection: PropTypes.string,
//     year: PropTypes.number,
//     price: PropTypes.number,
//     ranking: PropTypes.number,
//     complete: PropTypes.bool,
//     category: PropTypes.string,
//     remark: PropTypes.string,
//     review: PropTypes.string
//   }).isRequired
// };

export default Detail;
