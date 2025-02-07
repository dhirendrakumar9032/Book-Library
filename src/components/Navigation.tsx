import React from 'react';
import { Link } from 'react-router-dom';
import {  BiPlusCircle } from 'react-icons/bi';
import booksIcon from '../resouces/bookIcon.svg'

export const Navigation: React.FC = () => {
  
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center text-blue-600">
              <img src={booksIcon} className='w-10'/>
              <span className="ml-2 text-xl font-semibold">Book Collection</span>
            </Link>
          </div>
          
          <div className="flex items-center space-x-4">
            <Link
              to="/books"
              className={"px-3 py-2 rounded-md text-sm font-medium text-blue-600 bg-blue-50"}
            >
              My Books
            </Link>
            <Link
              to="/add"
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-green-600 hover:bg-blue-700 rounded-md"
            >
              <BiPlusCircle className="w-4 h-4 mr-2" />
              Add Book
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}