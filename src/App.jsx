import React from 'react'
import './App.css'
import BookShelf from './BookShelf'

function App() {
  return (
    <>
    <h1> Ben's Library </h1>
    <BookShelf />
    <input type="text" />
    <button>Add book to shelf</button>
    <button>Clear shelf</button>
    <div>0 books read.</div>
    </>
  )
}

export default App
