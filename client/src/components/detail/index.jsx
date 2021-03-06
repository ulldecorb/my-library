import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './detail.css';

export function Detail() {
  const { bookId } = useParams();
  // const [book, setBook] = useState({});
  const [id, setId] = useState(bookId);
  const [author, setAuthor] = useState(undefined);
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

  const getBookById = async () => {
    await fetch(`/api/${bookId}`)
      .then((res) => res.json())
      .then((data) => {
        // setBook(data);
        // eslint-disable-next-line no-underscore-dangle
        setId(bookId);
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
  }, []);

  const handleDeleteBook = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`/api/${id}`, {
        method: 'DELETE'
      });
      if (res.status === 200 || 204) {
        setMessage('Delete succesfully');
      } else {
        setMessage('Delete failed');
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleAddBook = async (e) => {
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
    <div className="book-form">
      {
        !author
          ? (<h3 className="book-form__title">Loading...</h3>)
          : (
            <>
              <h3 className="book-form__title">Update book</h3>
              <form onSubmit={handleAddBook} className="book-form__form">
                <label htmlFor="title" className="book-form__label">
                  <p className="book-form__label-text">Title:</p>
                  <input
                    className="book-form__input"
                    id="title"
                    type="text"
                    value={title}
                    placeholder="T??tulo"
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </label>

                <label htmlFor="author" className="book-form__label">
                  <p className="book-form__label-text">Author:</p>
                  <input
                    className="book-form__input"
                    id="author"
                    type="text"
                    value={author}
                    placeholder="Autor"
                    onChange={(e) => setAuthor(e.target.value)}
                  />
                </label>

                <label htmlFor="company" className="book-form__label">
                  <p className="book-form__label-text">Editorial:</p>
                  <input
                    className="book-form__input"
                    id="company"
                    type="text"
                    value={company}
                    placeholder="Editorial"
                    onChange={(e) => setCompany(e.target.value)}
                  />
                </label>

                <label htmlFor="collection" className="book-form__label">
                  <p className="book-form__label-text">Collection:</p>
                  <input
                    className="book-form__input"
                    id="collection"
                    type="text"
                    value={colection}
                    placeholder="Colecci??n"
                    onChange={(e) => setColection(e.target.value)}
                  />
                </label>

                <label htmlFor="category" className="book-form__label">
                  <p className="book-form__label-text">Category:</p>
                  {/* <input
                  className="book-form__input"
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

                <label htmlFor="year" className="book-form__label">
                  <p className="book-form__label-text">Year:</p>
                  <input
                    className="book-form__input"
                    id="year"
                    type="number"
                    value={year}
                    placeholder="A??o"
                    onChange={(e) => setYear(e.target.value)}
                  />
                </label>

                <label htmlFor="price" className="book-form__label">
                  <p className="book-form__label-text">Price:</p>
                  <input
                    className="book-form__input"
                    id="price"
                    type="number"
                    value={price}
                    placeholder="Rese??a"
                    onChange={(e) => setPrice(e.target.value)}
                  />
                </label>

                <label htmlFor="ranking" className="book-form__label">
                  <p className="book-form__label-text">Ranking:</p>
                  <input
                    className="book-form__input"
                    id="ranking"
                    type="number"
                    value={ranking}
            // min="0"
            // max="5"
                    placeholder="Ranking"
                    onChange={(e) => setRanking(e.target.value)}
                  />
                </label>

                <label htmlFor="complete" className="book-form__label">
                  <p className="book-form__label-text">Completed:</p>
                  <input
                    className="book-form__input"
                    id="complete"
                    type="checkbox"
                    value={complete}
                    onChange={() => setComplete(!complete)}
                  />
                </label>

                <label htmlFor="remark" className="book-form__label">
                  <p className="book-form__label-text">Remark:</p>
                  {/* <input
                  className="book-form__input"
            id="remark"
            type="text"
            value={remark}
            placeholder="Comentarios"
            onChange={(e) => setRemark(e.target.value)}
          /> */}
                  <textarea
                    className="book-form__input input__textarea"
                    id="remark"
                    value={remark}
                    placeholder="Comentarios"
                    onChange={(e) => setRemark(e.target.value)}
                  />
                </label>

                <label htmlFor="review" className="book-form__label">
                  <p className="book-form__label-text">Review:</p>
                  <textarea
                    className="book-form__input input__textarea"
                    id="review"
                    value={review}
                    placeholder="Rese??a"
                    onChange={(e) => setReview(e.target.value)}
                  />
                </label>
                <nav className="book-form__handler-box">

                  <button type="submit" className="book-form__handler">Update</button>
                  <button onClick={handleDeleteBook} type="button" className="book-form__handler">Delete</button>

                </nav>
              </form>
              <div className="message">{message ? <p>{message}</p> : null}</div>
            </>
          )
      }
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
