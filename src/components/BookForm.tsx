import React, { useState } from 'react';
import { Book } from '../types/book';

interface BookFormProps {
  initialBook?: Book;
  onSubmit: (book: Book) => void;
}

export const BookForm: React.FC<BookFormProps> = ({ initialBook, onSubmit }) => {
  const [book, setBook] = useState<Book>({
    id: initialBook?.id || crypto.randomUUID(),
    title: '',
    author: '',
    genre: '',
    description: '',
    coverUrl: '',
    ...initialBook,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(book);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
        <input
          type="text"
          required
          value={book.title}
          onChange={(e) => setBook({ ...book, title: e.target.value })}
          className="w-full px-4 py-2 rounded-md border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors"
          placeholder="Enter book title"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Author</label>
        <input
          type="text"
          required
          value={book.author}
          onChange={(e) => setBook({ ...book, author: e.target.value })}
          className="w-full px-4 py-2 rounded-md border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors"
          placeholder="Enter author name"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Genre</label>
        <input
          type="text"
          required
          value={book.genre}
          onChange={(e) => setBook({ ...book, genre: e.target.value })}
          className="w-full px-4 py-2 rounded-md border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors"
          placeholder="Enter book genre"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
        <textarea
          required
          value={book.description}
          onChange={(e) => setBook({ ...book, description: e.target.value })}
          rows={4}
          className="w-full px-4 py-2 rounded-md border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors resize-none"
          placeholder="Enter book description"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Cover URL</label>
        <input
          type="url"
          value={book.coverUrl}
          onChange={(e) => setBook({ ...book, coverUrl: e.target.value })}
          className="w-full px-4 py-2 rounded-md border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors"
          placeholder="Enter cover image URL (optional)"
        />
      </div>

      <button
        type="submit"
        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
      >
        {initialBook ? 'Update Book' : 'Add Book'}
      </button>
    </form>
  );
};