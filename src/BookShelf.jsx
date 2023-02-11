import './BookShelf.css'
import Book from './Book'

function BookShelf({ books, toggleBook, removeBook}) {

  return(
    <table style={{
      tableLayout: 'fixed',
      width: '80%',
      height: '60%',
      gap:'2rem',
      margin: '0 auto',
      alignItems: 'left',
      borderCollapse: 'separate',
      borderSpacing: '10px',
      border: "3px solid black"
    }}>
      <thead>
          <tr>
              <th>Title</th>
              <th>Author</th>
              <th>Pages</th>
              <th>Read</th>
              <th></th>
          </tr>
      </thead>
      <tbody>
      {books.map((book,i) => (
        <Book index={i} key={book.id} book={book} toggleBook={toggleBook} removeBook={removeBook}/>
      ))}
      </tbody>
    </table>
  )
}

export default BookShelf
