import React from 'react';
import TableField from './TableField';

const Table = ({books, editBook, removeBook}) => {

    return (
        <div className="table">
            <div className="tableHeading">
                <TableField fieldName="Title" />
                <TableField fieldName="Author" />
                <TableField fieldName="Isbn" />
                <TableField fieldName="Settings" />
            </div>
            {books.map((book) => (
                <div key={book.bookId} className="tableRow">
                     <TableField fieldName={book.bookTitle} />
                    <TableField fieldName={book.bookAuthor} />
                    <TableField fieldName={book.bookIsbn} />
                    <TableField 
                        settingsField
                        editBook={() => editBook(book)}
                        removeBook={() => removeBook(book.bookId)}
                    />
                </div>
            ))}
        </div>
    )
}

export default Table;