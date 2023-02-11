import React, { useState, useRef } from 'react'
import './App.css'
import BookShelf from './BookShelf'

let count=1

function App() {
  const [books, setBooks] = useState([])
  const titleRef = useRef()
  const authorRef = useRef()
  const pageRef = useRef()

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

  function removeBook (id) {
    setBooks(books => books.filter((item) => item.id !== id));
  }

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
    // update our books with our new one
    setBooks(prevBooks => {
      return [
        ...prevBooks, 
        {id:count, title:title, author:author, pages:pages, read:false}
      ]
    })
    /* clear old input */
    titleRef.current.value = null
    authorRef.current.value = null
    pageRef.current.value = null
    /* increment id */
    count += 1
  }

  const labelStyle = {
    padding: "10px",
  }

  const inputStyle = {
    margin: "10px"
  };

  return (
    <>
    <h1> 📚 Ben's Bookshelf 📖 </h1>
    <BookShelf books={books} toggleBook={toggleBook} removeBook={removeBook}/>
    <div>
      <label style={labelStyle}>Title:</label>
      <input ref={titleRef} type="text" style={inputStyle}/>
      <label style={labelStyle}>Author:</label>
      <input ref={authorRef} type="text" style={inputStyle}/>
      <label style={labelStyle}>Pages:</label>
      <input ref={pageRef} type="text" style={inputStyle}/>
    </div>
    <button onClick={handleAddBook}>Add book to shelf</button>
    </>
  )
}

export default App
