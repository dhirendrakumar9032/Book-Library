import React from 'react';
import { Link } from 'react-router-dom';
import {  BiBook, BiPlusCircle } from 'react-icons/bi';
import bookCollenction from '../resouces/bookCollection.png'
import { Navigation } from '../components/Navigation';

export const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navigation />
      <div className="flex-1 flex flex-col items-center justify-center p-4">
        <div className="text-center max-w-2xl">
          <img src={bookCollenction} className="w-[300px] text-blue-600 mx-auto"/>
          <h1 className="mt-6 text-5xl font-bold text-gray-900">Book Collection Manager</h1>
          <p className="mt-4 text-xl text-gray-600">
            This is your personal digital library helper. Easily organize, keep track of, and manage your books.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/books"
              className="inline-flex items-center px-8 py-3 text-base font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-md transition-colors"
            >
              <BiBook className="w-5 h-5 mr-2" />
              View Collection
            </Link>
            <Link
              to="/add"
              className="inline-flex items-center px-8 py-3 text-base font-medium text-blue-600 bg-white hover:bg-gray-50 rounded-lg shadow-md border border-blue-600 transition-colors"
            >
              <BiPlusCircle className="w-5 h-5 mr-2" />
              Add New Book
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}