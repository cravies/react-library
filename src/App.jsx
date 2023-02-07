import React, { useState, useRef } from 'react'
import './App.css'
import BookShelf from './BookShelf'

let count=1

function App() {
  const [books, setBooks] = useState([])
  const bookNameRef = useRef()

  function toggleBook(id) {
    /* never want to change state directly in react */
    const newBooks = [...books]
    /* grab the book with the right id */
    const book = newBooks.find(book => book.id==id)
    /* toggle read state */
    book.read = !book.read 
    /* update books */
    setBooks(newBooks)
  }

  function handleAddBook(e) {
    const name = bookNameRef.current.value
    if (name==='') {
      /* empty array*/
      return
    }
    setBooks(prevBooks => {
      return [...prevBooks, {id:count, name:name, read:false}]
    })
    /* clear old input */
    bookNameRef.current.value = null;
    /* increment id */
    count += 1
  }

  return (
    <>
    <h1> Ben's Library </h1>
    <h2> Bookshelf: </h2>
    <BookShelf books={books} toggleBook={toggleBook}/>
    <input ref={bookNameRef} type="text" />
    <button onClick={handleAddBook}>Add book to shelf</button>
    </>
  )
}

export default App
