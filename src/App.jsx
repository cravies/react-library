import React, { useState, useRef } from "react";
import { useEffect } from "react";
import "./App.css";
import BookShelf from "./BookShelf";
import { defaultBooks } from "./constants";

let count = 1;

function App() {

  const [books, setBooks] = useState(defaultBooks);
  const [readnum, setBooksRead] = useState(5);
  const [tagstate, setTagState] = useState([]);
  const titleRef = useRef();
  const authorRef = useRef();
  const pageRef = useRef();
  const tagRef = useRef();
  const selectRef = useRef();

  // initialise app
  console.log(defaultBooks);

  // need to recount books every time book state changes
  useEffect(() => {
    console.log(books);
    countRead();
  }, [books]);

  function toggleBook(id) {
    /* never want to change state directly in react */
    const newBooks = [...books];
    /* grab the book with the right id */
    const book = newBooks.find((book) => book.id == id);
    /* toggle read state */
    book.read = !book.read;
    /* update books */
    setBooks(newBooks);
  }

  // count the number of books we have read and display
  function countRead() {
    let res=0;
    for (let i=0; i<books.length; i++) {
      if (books[i].read && books[i].hide!=true) {
        res += 1;
      }
    }
    setBooksRead(res);
  }

  function removeBook(id) {
    setBooks((books) => books.filter((item) => item.id !== id));
  }

  function selectTag(myTags = null) {
    if (myTags == null) {
      // called from search bar
      console.log("grabbing tags from useRef hook");
      myTags = selectRef.current.value;
      // string split into array
      myTags = splitTags(myTags)
      console.log(myTags);
      const newBooks = [...books];
      // show everything (hide is false)
      newBooks.map(
        (book) => (book.hide = false)
      );
      // now for each tag, hide it if it doesnt have this tag
      myTags.map((tag) =>
        newBooks.map(
          (book) => { if (book.tags.includes(tag)!=true) { book.hide = true } }
        )
      );
      setBooks(newBooks);
    } else {
      //otherwise called from button, tag is not null
      const newBooks = [...books];
      // grab a book that doesn't include the tag
      newBooks.map(
        (book) => (book.hide = book.tags.includes(myTags) ? false : true)
      );
      setBooks(newBooks);
    }
    // set the tag filter header up the top
    console.log(typeof myTags);
    if (typeof myTags == "string") {
      // using a string
      setTagState((oldTags) => {return [...oldTags,myTags]})
    } else {
      // using an array, map each element
      myTags.map( (tag) =>
        setTagState((oldTags) => {return [...oldTags,tag]})
      )
    }
  }

  function showAll() {
    // set all book.hide = false
    const newBooks = [...books];
    newBooks.map((book) => (book.hide = false));
    setBooks(newBooks);
    // reset tag count and read count
    setTagState([]);
  }

  /* check if a var is a valid number 
  use to parse page number str 
  as react doesnt have number inputs */
  function isNum(num) {
    return !isNaN(num);
  }

  function splitTags(tags) {
    // split our tags by space or comma separation
    // should be in format
    // 'thriller, western, romance'
    // or 'thriller,western,romance'
    // or 'thriller western romance'
    if (tags.includes(", ")) {
      tags = tags.split(", ");
    } else if (tags.includes(",")) {
      tags = tags.split(",");
    } else {
      tags = tags.split(" ");
    }
    return tags;
  }

  function AddBook() {
    const title = titleRef.current.value;
    const author = authorRef.current.value;
    const tags = splitTags(tagRef.current.value);
    /* js ternary operator syntax:
    condition ? exprIfTrue : exprIfFalse
    I use to set pages to 0 if not a valid number */
    const pages = isNum(pageRef.current.value) ? pageRef.current.value : 0;
    // update our books with our new one
    setBooks((prevBooks) => {
      return [
        ...prevBooks,
        {
          id: count,
          title: title,
          author: author,
          pages: pages,
          read: false,
          tags: tags,
          hide: false,
        },
      ];
    });
    /* clear old input */
    titleRef.current.value = null;
    authorRef.current.value = null;
    pageRef.current.value = null;
    tagRef.current.value = null;

    /* increment id */
    count += 1;
  }

  const labelStyle = {
    padding: "10px",
  };

  const inputStyle = {
    margin: "10px",
  };

  const buttonStyle = {
    border: "1px solid black",
    margin: "10px",
  };

  const blockStyle = {
    display: "inline-block",
    marginRight: '10px',
  }

  const blockButtonStyle = {
    border: "1px solid black",
    margin: "10px",
    display: "inline-block",
    marginRight: '10px',
  }

  return (
    <>
      <h1> 📚 Bookshelf 📖 </h1>
      <div>
        <h2 style={blockStyle}> Total </h2>     
        {tagstate.map((tags,i) => (
          <button style={blockButtonStyle} key={i*9782}> {tags} </button>
        ))}
        <h2 style={blockStyle}> Books Read: {readnum} </h2>
      </div>
      <BookShelf
        books={books}
        toggleBook={toggleBook}
        removeBook={removeBook}
        selectTag={selectTag}
      />
      <div>
        <label style={labelStyle}>Title:</label>
        <input ref={titleRef} type="text" style={inputStyle} />
        <label style={labelStyle}>Author:</label>
        <input ref={authorRef} type="text" style={inputStyle} />
        <label style={labelStyle}>Pages:</label>
        <input ref={pageRef} type="text" style={inputStyle} />
        <label style={labelStyle}>Tags:</label>
        <input ref={tagRef} type="text" style={inputStyle} />
      </div>
      <div>
        <button style={buttonStyle} onClick={AddBook}>
          Add book to shelf
        </button>
        <button style={blockButtonStyle} onClick={showAll}>
          Reset tag filters
        </button>
      </div>
      <div>
        <label style={inputStyle}>Search by tags</label>
        <input ref={selectRef} type="text" style={inputStyle} />
        <button style={buttonStyle} onClick={() => selectTag()}>
          Search
        </button>
      </div>
    </>
  );
}

export default App;
