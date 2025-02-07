import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useBooks } from '../hooks/useBooks';
import { Navigation } from '../components/Navigation';
import { BiArrowBack } from 'react-icons/bi';
import { BookCard } from '../components/BookCard';

export const BookDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { getBookById, removeBook } = useBooks();
  const book = getBookById(id!);

  if (!book) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Navigation />
        <div className="flex-1 p-6">
          <div className="max-w-3xl mx-auto text-center">
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

  const handleDelete = () => {
    removeBook(book.id);
    navigate('/books');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navigation />
      <div className="flex-1 p-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <button
              onClick={() => navigate('/books')}
              className="inline-flex items-center text-gray-600 hover:text-gray-900"
            >
              <BiArrowBack className="w-5 h-5 mr-2" />
              Back to Collection
            </button>
          </div>

          <BookCard 
            book={book} 
            onDelete={handleDelete} 
            variant="detail" 
          />
        </div>
      </div>
    </div>
  );
};