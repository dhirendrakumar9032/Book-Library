import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/store';
import { addBook, updateBook, deleteBook } from '../store/bookSlice';
import { Book } from '../types/book';

export const useBooks = () => {
  const dispatch = useDispatch();
  const books = useSelector((state: RootState) => state.books.books);

  const addNewBook = (book: Book) => {
    dispatch(addBook(book));
  };

  const editBook = (book: Book) => {
    dispatch(updateBook(book));
  };

  const removeBook = (id: string) => {
    dispatch(deleteBook(id));
  };

  const getBookById = (id: string) => {
    return books.find((book) => book.id === id);
  };

  return {
    books,
    addNewBook,
    editBook,
    removeBook,
    getBookById,
  };
};