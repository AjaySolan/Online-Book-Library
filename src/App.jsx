import { Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import BrowseBooksPage from './components/BrowseBooksPage';
import BookDetailsPage from './components/BookDetailsPage';
import AddBookPage from './components/AddBookPage';
import NotFoundPage from './components/NotFoundPage';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/browse" element={<BrowseBooksPage />} />
        <Route path="/books/details/:id" element={<BookDetailsPage />} />
        <Route path="/add" element={<AddBookPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
};

export default App;
