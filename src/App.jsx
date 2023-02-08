import React, { useState, useRef } from 'react'
import './App.css'
import BookShelf from './BookShelf'

let count=1

function App() {
  const [books, setBooks] = useState([])
  const titleRef = useRef()
  const authorRef = useRef()

  function handleAddBook(e) {
    const title = titleRef.current.value
    const author = authorRef.current.value
    if (title==='') {
      /* empty array*/
      return
    }
    setBooks(prevBooks => {
      return [
        ...prevBooks, 
        {id:count, title:title, read:false, author:author}
      ]
    })
    /* clear old input */
    titleRef.current.value = null;
    authorRef.current.value = null;
    /* increment id */
    count += 1
  }

  return (
    <>
    <h1> Ben's Bookshelf </h1>
    <h2> Bookshelf: </h2>
    <BookShelf books={books}/>
    <label>Book Title:</label>
    <input ref={titleRef} type="text" />
    <label>Author Name:</label>
    <input ref={authorRef} type="text" />
    <button onClick={handleAddBook}>Add book to shelf</button>
    </>
  )
}

export default App
