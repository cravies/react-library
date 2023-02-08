import './BookShelf.css'
import Book from './Book'
import { DataGrid, useGridApiRef} from '@mui/x-data-grid';
import React, { useState, useRef } from 'react'

function BookShelf({ books, name }) {
  const columns = [
    { field: 'id', headerName: 'ID', width:90},
    { field: 'title', headerName: 'Book Title', width:300},
    { field: 'author', headerName: 'Author', width:300},
    { field: 'pages', headerName:'Pages', type:'number', width:120},
    { field: 'pages_read', headerName: 'Pages Read', type:'number', width:120, editable:true},
    { field: 'progress', headerName: 'Progress', width:120}
  ];

  /* calulate progress through the book */
  function progressRow(pages, pages_read) {
    if (pages_read==0) {
      return "0%";
    } else {
      return `${(pages_read / pages)*100}%`;
    }
  }
  
  /* make our row with book progress*/
  function createRow(book) {
    const progress = progressRow(book.pages, book.pages_read);
    book = {'id':book.id, 'title':book.title, 'author':book.author, 
    'pages':book.pages, 'pages_read':book.pages_read, 'progress':progress}
    return book
  }
  
  /* update row */
  const processRowUpdate = (newRow) => {
      /* update progress bar */
      const updatedRow = createRow(newRow)
      return updatedRow;
  };

  function DataTable() {
    /* calulate progress for books */
    books = books.map(book => createRow(book));
    return (
        <div style={{ height: 400, width: '100%' }}>
        <DataGrid
            rows={books}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            experimentalFeatures={{ newEditingApi: true }}
            processRowUpdate={processRowUpdate}
        />
        </div>
    );
  }

  return(DataTable())
}

export default BookShelf
