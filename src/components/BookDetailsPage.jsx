import { useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';

const BookDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const books = useSelector((state) => state.books.books);
  const book = books.find((book) => book.id === parseInt(id));

  if (!book) {
    return <p>Book not found.</p>;
  }

  return (
    <div className="book-details-container">
      <h1>{book.title}</h1>
      <p><strong>Author:</strong> {book.author}</p>
      <p><strong>Description:</strong> {book.description}</p>
      <p><strong>Rating:</strong> {book.rating}</p>
      <button onClick={() => navigate('/browse')} className="back-button">
        Back to Browse
      </button>
    </div>
  );
};

export default BookDetailsPage;
