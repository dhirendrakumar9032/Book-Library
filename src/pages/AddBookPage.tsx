import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BookForm } from '../components/BookForm';
import { useBooks } from '../hooks/useBooks';
import { Book } from '../types/book';
import { Navigation } from '../components/Navigation';

export const AddBookPage: React.FC = () => {
  const navigate = useNavigate();
  const { addNewBook } = useBooks();

  const handleSubmit = (book: Book) => {
    addNewBook(book);
    navigate('/books');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navigation />
      <div className="flex-1 p-6">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Add New Book</h1>
          <div className="bg-white rounded-lg shadow p-6">
            <BookForm onSubmit={handleSubmit} />
          </div>
        </div>
      </div>
    </div>
  );
}