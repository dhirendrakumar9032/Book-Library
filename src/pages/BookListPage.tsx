import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BookCard } from '../components/BookCard';
import { useBooks } from '../hooks/useBooks';
import { BiPlusCircle } from 'react-icons/bi';
import { Navigation } from '../components/Navigation';

export const BookListPage: React.FC = () => {
  const { books, removeBook } = useBooks();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navigation />
      <div className="flex-1 p-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900">My Book Collection</h1>
            <Link
              to="/add"
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-green-600 hover:bg-blue-700 rounded-md"
            >
              <BiPlusCircle className="w-5 h-5 mr-2" />
              Add Book
            </Link>
          </div>

          {books.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-600">No books in your collection yet.</p>
              <Link
                to="/add"
                className="mt-4 inline-flex items-center text-blue-600 hover:text-blue-700"
              >
                Add your first book
              </Link>
            </div>
          ) : (
              <div className="grid grid-cols-1 gap-4 divide-y divide-gray-100">
                {books.map((book) => (
                  <BookCard 
                    key={book.id} 
                    book={book} 
                    onDelete={removeBook}
                    onNavigate={(id) => navigate(`/books/${id}`)}
                  />
                ))}
              </div>
          )}
        </div>
      </div>
    </div>
  );
};