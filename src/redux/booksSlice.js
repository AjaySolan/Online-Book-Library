import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [
    {
      id: 1,
      title: 'The Great Gatsby',
      author: 'by F. Scott Fitzgerald',
      category: 'Non-Fiction',
      description: 'A brief history of humankind.',
      rating: 4.5,
    },
    {
    id: 2,
    title: '1984',
    author: 'George Orwell',
    category: 'Fiction',
    description: 'A dystopian novel about a totalitarian regime.',
    rating: 5,
  },
    {
    id: 3,
    title: 'To Kill a Mockingbird',
    author: 'by Harper Lee',
    category: 'Fiction',
    description: 'A dystopian novel about a totalitarian regime.',
    rating: 5,
  },
  ],
};

const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.books.push(action.payload);
    },
  },
});

export const { addBook } = bookSlice.actions;
export default bookSlice.reducer;
