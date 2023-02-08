import React, { useState, useRef } from 'react'
import './App.css'
import BookShelf from './BookShelf'

let count=1

function App() {
  const [books, setBooks] = useState([])
  const titleRef = useRef()
  const authorRef = useRef()
  const pageRef = useRef()

  /* check if a var is a valid number 
  use to parse page number str 
  as react doesnt have number inputs */
  function isNum(num){
    return !isNaN(num)
  }

  function handleAddBook(e) {
    const title = titleRef.current.value
    const author = authorRef.current.value
    /* js ternary operator syntax:
    condition ? exprIfTrue : exprIfFalse
    I use to set pages to 0 if not a valid number */
    const pages = isNum(pageRef.current.value) ? pageRef.current.value : 0
    setBooks(prevBooks => {
      return [
        ...prevBooks, 
        {id:count, title:title, author:author, pages:pages}
      ]
    })
    /* clear old input */
    titleRef.current.value = null
    authorRef.current.value = null
    pageRef.current.value = null
    /* increment id */
    count += 1
  }

  return (
    <>
    <h1> Ben's Bookshelf </h1>
    <BookShelf books={books}/>
    <label>Book Title:</label>
    <input ref={titleRef} type="text" />
    <label>Author Name:</label>
    <input ref={authorRef} type="text" />
    <label># of Pages:</label>
    <input ref={pageRef} type="text" />
    <button onClick={handleAddBook}>Add book to shelf</button>
    </>
  )
}

export default App
