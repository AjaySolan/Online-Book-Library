import { useDispatch } from 'react-redux';
import { addBook } from '../redux/booksSlice';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const AddBookPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    category: '',
    description: '',
    rating: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !formData.title ||
      !formData.author ||
      !formData.category ||
      !formData.description ||
      !formData.rating
    ) {
      alert('Please fill out all fields.');
      return;
    }
    const newBook = {
      id: Date.now(),
      ...formData,
    };
    dispatch(addBook(newBook));
    navigate('/browse');
  };

  return (
    <div className="add-book-container">
      <h1>Add a New Book</h1>
      <form onSubmit={handleSubmit} className="add-book-form">
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="author"
          placeholder="Author"
          value={formData.author}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="category"
          placeholder="Category"
          value={formData.category}
          onChange={handleChange}
          required
        />
        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="rating"
          placeholder="Rating (1-5)"
          value={formData.rating}
          onChange={handleChange}
          required
          min="1"
          max="5"
        />
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default AddBookPage;
