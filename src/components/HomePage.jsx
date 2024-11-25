import { Link } from 'react-router-dom';

const HomePage = () => {
  const categories = ["Fiction", "Non-Fiction", "Sci-Fi", "Romance", "Mystery"];
  const popularBooks = [
    { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald", image: "https://via.placeholder.com/150" },
    { id: 2, title: "1984", author: "George Orwell", image: "https://via.placeholder.com/150" },
    { id: 3, title: "To Kill a Mockingbird", author: "Harper Lee", image: "https://via.placeholder.com/150" },
  ];

  return (
    <div className="home-container">
      <div className="welcome-section">
        <h1>Welcome to the Online Library</h1>
        <p>Discover your next favorite book!</p>
      </div>
      <section className="categories-section">
        <h2>Book Categories</h2>
        <ul className="category-list">
          {categories.map((category, index) => (
            <li key={index}>
              <Link to={`/browse?category=${category.toLowerCase()}`}>{category}</Link>
            </li>
          ))}
        </ul>
      </section>
      <section className="popular-books-section">
        <h2>Popular Books</h2>
        <div className="popular-books-grid">
          {popularBooks.map((book) => (
            <div key={book.id} className="book-card">
              <h3>{book.title}</h3>
              <p>by {book.author}</p>
              <Link to={`/books/details/${book.id}`}>View Details</Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
