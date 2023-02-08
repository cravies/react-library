import './BookShelf.css'
import Book from './Book'
import { DataGrid } from '@mui/x-data-grid';

function BookShelf({ books, name }) {
  const columns = [
    { field: 'id', headerName: 'ID', width:90},
    { field: 'title', headerName: 'Book Title', width:300},
    { field: 'author', headerName: 'Author', width:300},
    { field: 'pages', headerName:'Pages', type:'number', width:120},
    { field: 'pages_read', headerName: 'Pages Read', type:'number', width:120, editable:true}
  ];

  function DataTable() {
    return (
        <div style={{ height: 400, width: '100%' }}>
        <DataGrid
            rows={books}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
        />
        </div>
    );
  }

  return(DataTable())
}

export default BookShelf
