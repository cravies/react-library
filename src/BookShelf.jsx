import './BookShelf.css'
import Book from './Book'

function BookShelf({ books, toggleBook, removeBook}) {

  const headStyle = {
    border: "1px solid black",
  };

  return(
    <table style={{
      tableLayout: 'fixed',
      width: '85%',
      height: '65%',
      gap:'2rem',
      margin: '0 auto',
      alignItems: 'left',
      borderCollapse: 'separate',
      borderSpacing: '10px',
      border: "3px solid black",
      backgroundColor: '#f4f2e9',
    }}>
      <thead>
          <tr>
              <th style={headStyle}>Title</th>
              <th style={headStyle}>Author</th>
              <th style={headStyle}>Pages</th>
              <th style={headStyle}>Read</th>
              <th></th>
          </tr>
      </thead>
      <tbody>
      {books.map((book,i) => (
        <Book 
        index={i} key={book.id} book={book} 
        toggleBook={toggleBook} removeBook={removeBook}
        />
      ))}
      </tbody>
    </table>
  )
}

export default BookShelf
