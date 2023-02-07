import './BookShelf.css'
import Book from './Book'

function BookShelf({ books, toggleBook}) {
  return (
    books.map(book => {
      return <Book key={book.id} book={book} toggleBook={toggleBook} />
    })
  )
}

export default BookShelf
