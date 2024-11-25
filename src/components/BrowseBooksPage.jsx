import { useSelector } from 'react-redux';
import { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';

const BrowseBooksPage = () => {
  const books = useSelector((state) => state.books.books);
  const [searchParams] = useSearchParams();
  const categoryFilter = searchParams.get('category');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredBooks = books.filter((book) => {
    const matchesCategory = categoryFilter
      ? book.category.toLowerCase() === categoryFilter
      : true;
    const matchesSearch = book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          book.author.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="browse-container">
      <h1>Browse Books</h1>
      <input
        type="text"
        placeholder="Search by title or author..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="search-bar"
      />
      <div className="books-grid">
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book) => (
            <div key={book.id} className="book-card">
              <h3>{book.title}</h3>
              <p>by {book.author}</p>
              <Link to={`/books/details/${book.id}`}>View Details</Link>
            </div>
          ))
        ) : (
          <p>No books found.</p>
        )}
      </div>
    </div>
  );
};

export default BrowseBooksPage;
