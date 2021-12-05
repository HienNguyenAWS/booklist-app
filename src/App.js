import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Form from './components/Form';
import Table from './components/Table';

import './App.css';

const App = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [isbn, setIsbn] = useState('');
  const [currentBookId, setCurrentBookId] = useState(null);
  const [books, setBooks] = useState([
    {
      bookTitle: "Book 1",
      bookAuthor: "Jonny",
      bookIsbn: "111",
      bookId: uuidv4()
    }
  ]);

  const addBook = () =>  {
    setBooks([...books, {
      bookTitle: title,
      bookAuthor: author,
      bookIsbn: isbn,
      bookId: uuidv4()
    }]);
  }

  const editBook = (book) => {
    setTitle(book.bookTitle);
    setAuthor(book.bookAuthor);
    setIsbn(book.bookIsbn);

    setCurrentBookId(book.bookId);
  }

  const updateBook = () => {
    setBooks(
      books.map((book) => 
        book.bookId === currentBookId ? { ...books, bookTitle: title, bookAuthor: author, bookIsbn: isbn } : book
      )
    )
  }

  const removeBook = (id) => { 
    setBooks(books.filter(book => book.bookId !== id));
  }

  const isInvalid = () => {
    return title.trim() === "" || author.trim() === "" || isbn.trim() === "";
  }

  const clearInputs = () => {
    setTitle('');
    setAuthor('');
    setIsbn('');
  }

  const handleSubmit = (e) => {
      e.preventDefault();
      clearInputs();
      setCurrentBookId(null);

      if(isInvalid()) return;
      !currentBookId  ? addBook() : updateBook();
  }

  const cancelInputs = () => {
    clearInputs();
    setCurrentBookId(null);
  }

  return (
    <div className="App">
      <div className="container">
          <Form 
            title={title}
            setTitle={setTitle}
            author={author}
            setAuthor={setAuthor}
            isbn={isbn}
            setIsbn={setIsbn}
            currentBookId={currentBookId}
            handleSubmit={handleSubmit}
            cancelInputs={cancelInputs}
          />
          <Table books = { books } editBook={editBook} removeBook = { removeBook }/>
        </div>
    </div>
  );
}

export default App;
