import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { HomePage } from './pages/HomePage';
import { BookListPage } from './pages/BookListPage';
import { AddBookPage } from './pages/AddBookPage';
import { EditBookPage } from './pages/EditBookPage';
import { BookDetailPage } from './pages/BookDetailPage';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/books" element={<BookListPage />} />
          <Route path="/books/:id" element={<BookDetailPage />} />
          <Route path="/add" element={<AddBookPage />} />
          <Route path="/edit/:id" element={<EditBookPage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;