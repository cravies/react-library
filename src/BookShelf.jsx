import './BookShelf.css'
import Book from './Book'
import { DataGrid } from '@mui/x-data-grid';

function BookShelf({ books }) {
  const columns = [
    { field: 'id', headerName: 'ID', width: 130 },
    { field: 'title', headerName: 'Book Title', width: 130 },
    { field: 'author', headerName: 'Author', width: 130 },
  ];

  function DataTable() {
    return (
        <div style={{ height: 400, width: '100%' }}>
        <DataGrid
            rows={books}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
        />
        </div>
    );
  }

  return(DataTable())
}

export default BookShelf
