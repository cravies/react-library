import './BookShelf.css'
import Book from './Book'

function BookShelf({ books, toggleBook}) {
  const bookList = books.map((book) => 
    <Book key={book.id} book={book} toggleBook={toggleBook} />
  );
  return (
    bookList
  )
}

export default BookShelf
