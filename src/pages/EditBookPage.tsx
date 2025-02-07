import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { BookForm } from '../components/BookForm';
import { useBooks } from '../hooks/useBooks';
import { Book } from '../types/book';
import { Navigation } from '../components/Navigation';

export const EditBookPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { getBookById, editBook } = useBooks();
  const book = getBookById(id!);

  if (!book) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Navigation />
        <div className="flex-1 p-6">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Book Not Found</h1>
            <button
              onClick={() => navigate('/books')}
              className="text-blue-600 hover:text-blue-700"
            >
              Return to Collection
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navigation />
      <div className="flex-1 p-6">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Edit Book</h1>
          <div className="bg-white rounded-lg shadow p-6">
            <BookForm initialBook={book} onSubmit={handleSubmit} />
          </div>
        </div>
      </div>
    </div>
  );

  function handleSubmit(updatedBook: Book) {
    editBook(updatedBook);
    navigate('/books');
  }
}