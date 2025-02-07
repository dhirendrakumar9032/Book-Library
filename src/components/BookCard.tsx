import React from 'react';
import { Book } from '../types/book';
import { BiBook } from 'react-icons/bi';
import { FiEdit2, FiTrash2 } from 'react-icons/fi';
import { Link } from 'react-router-dom';

interface BookCardProps {
  book: Book;
  onDelete: (id: string) => void;
  variant?: 'list' | 'detail';
  onNavigate?: (id: string) => void;
}

export const BookCard: React.FC<BookCardProps> = ({ 
  book, 
  onDelete, 
  variant = 'list',
  onNavigate 
}) => {
  const handleClick = () => {
    if (onNavigate) {
      onNavigate(book.id);
    }
  };

  if (variant === 'detail') {
    return (
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="md:flex">
          <div className="md:w-96 h-96 flex-shrink-0">
            {book.coverUrl ? (
              <img
                src={book.coverUrl}
                alt={book.title}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                <BiBook className="w-20 h-20 text-gray-400" />
              </div>
            )}
          </div>
          <div className="p-8 flex-1">
            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">{book.title}</h1>
                <p className="text-xl text-gray-600 mb-4">by {book.author}</p>
              </div>
              <div className="flex space-x-2">
                <Link
                  to={`/edit/${book.id}`}
                  className="p-2 text-blue-600 hover:bg-blue-50 rounded-full transition-colors"
                  title="Edit book"
                >
                  <FiEdit2 className="w-5 h-5" />
                </Link>
                <button
                  onClick={() => onDelete(book.id)}
                  className="p-2 text-red-600 hover:bg-red-50 rounded-full transition-colors"
                  title="Delete book"
                >
                  <FiTrash2 className="w-5 h-5" />
                </button>
              </div>
            </div>
            <div className="mt-6">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                {book.genre}
              </span>
            </div>
            <div className="mt-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-2">Description</h2>
              <p className="text-gray-600 leading-relaxed">{book.description}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div 
      className="bg-white h-[80px] rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer border border-gray-100"
      onClick={handleClick}
    >
      <div className="flex h-full items-center px-4">
        <div className="w-10 h-10 flex-shrink-0 mr-4">
          {book.coverUrl ? (
            <img
              src={book.coverUrl}
              alt={book.title}
              className="w-full h-full object-cover rounded"
            />
          ) : (
            <div className="w-full h-full bg-gray-100 rounded flex items-center justify-center">
              <BiBook className="w-4 h-4 text-gray-400" />
            </div>
          )}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between">
            <div className="truncate">
              <h3 className="text-sm font-medium text-gray-900 truncate">{book.title}</h3>
              <p className="text-xs text-gray-500 truncate">by {book.author}</p>
            </div>
            <div 
              className="flex items-center space-x-1 ml-4"
              onClick={(e) => e.stopPropagation()}
            >
              <Link
                to={`/edit/${book.id}`}
                className="p-1.5 text-blue-600 hover:bg-blue-50 rounded-full"
              >
                <FiEdit2 size={14} />
              </Link>
              <button
                onClick={() => onDelete(book.id)}
                className="p-1.5 text-red-600 hover:bg-red-50 rounded-full"
              >
                <FiTrash2 size={14} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};