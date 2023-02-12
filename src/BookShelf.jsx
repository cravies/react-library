import "./BookShelf.css";
import Book from "./Book";

function BookShelf({ books, toggleBook, removeBook, selectTag }) {
  const headStyle = {
    border: "1px solid black",
  };

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  function rndKey(id) {
    return getRandomInt(1000) * id;
  }

  return (
    <table
      style={{
        tableLayout: "fixed",
        width: "90%",
        height: "70%",
        gap: "2rem",
        margin: "0 auto",
        alignItems: "left",
        borderCollapse: "separate",
        borderSpacing: "10px",
        border: "3px solid black",
        backgroundColor: "#f4f2e9",
      }}
    >
      <thead>
        <tr>
          <th style={headStyle}>Title</th>
          <th style={headStyle}>Author</th>
          <th style={headStyle}>Pages</th>
          <th style={headStyle}>Read</th>
          <th style={headStyle}>Tags</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {books.map((book, i) => (
          <Book
            index={i}
            key={rndKey(book.id)}
            book={book}
            toggleBook={toggleBook}
            removeBook={removeBook}
            selectTag={selectTag}
          />
        ))}
      </tbody>
    </table>
  );
}

export default BookShelf;
