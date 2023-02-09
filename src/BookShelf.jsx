import './BookShelf.css'
import Book from './Book'
import { DataGrid, useGridApiRef} from '@mui/x-data-grid';
import Box from '@mui/material/Box'
import React, { useState, useRef } from 'react'

function BookShelf({ books, name }) {
  const columns = [
    { field: 'id', headerName: 'ID', width:90},
    { field: 'title', headerName: 'Book Title', width:300},
    { field: 'author', headerName: 'Author', width:300},
    { field: 'pages', headerName:'Pages', type:'number', width:120},
    { field: 'pages_read', headerName: 'Pages Read', type:'number', width:120, editable:true},
    { field: 'progress', headerName: 'Progress %', width:120}
  ];

  /* calulate progress through the book */
  function progressRow(pages, pages_read) {
    if (pages_read==0) {
      return 0;
    } else {
      return (pages_read / pages)*100;
    }
  }
  
  /* make our row with book progress*/
  function createRow(book) {
    const progress = progressRow(book.pages, book.pages_read);
    book = {'id':book.id, 'title':book.title, 'author':book.author, 
    'pages':book.pages, 'pages_read':500, 'progress':`${progress}`}
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
          <Box
          sx={{
            height: 300,
            width: '100%',
            '& .other': {
              color: '#213547',
              backgroundColor: '#ffffff',
            },
            '& .low': {
              backgroundColor: 'rgba(255, 0, 0, 0.5)',
            },
            '& .medium': {
              backgroundColor: 'rgba(255, 128, 0, 0.5)',
            },
            '& .high': {
              backgroundColor: 'rgba(0, 255, 0, 0.5)',
            },
          }}
        >
        <DataGrid
            rows={books}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            experimentalFeatures={{ newEditingApi: true }}
            processRowUpdate={processRowUpdate}
            getCellClassName={(params) => {
              if (params.field != 'progress' || params.value == null) {
                return 'other'
              }
              if (params.value <= 33.3) {
                return 'low'
              } else if (params.value <= 66.6) {
                return 'medium'  
              } else {
                return 'high'
              }
            }}
        />
        </Box>
    );
  }
  return(DataTable())
}

export default BookShelf