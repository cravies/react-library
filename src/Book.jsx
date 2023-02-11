import React from 'react'

export default function Book({ book, toggleBook, removeBook }) {

    const tags = book.tags

    // toggle the book back and forth from [read <-> not read]
    function handleBookClick() {
        toggleBook(book.id)
    }

    // remove the book
    function handleRemoveBook() {
        removeBook(book.id)
    }

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
      }
    
    function rndKey(id) {
        return getRandomInt(1000)*id
    }

    /* green if we've read it */
    return (
        <tr>
            <td style={{border: "1px solid black", backgroundColor: book.read? 'lightgreen':'white'}}>
                <label>{book.title}</label>
            </td>
            <td style={{border: "1px solid black", backgroundColor: book.read? 'lightgreen':'white'}}>
                <label>{book.author}</label>
            </td>
            <td style={{border: "1px solid black", backgroundColor: book.read? 'lightgreen':'white'}}>
                <label>{book.pages}</label>
            </td>
            <td style={{border: "1px solid black", backgroundColor: book.read? 'lightgreen':'white'}}>
                <input style={{display:'inline-block'}} type="checkbox" checked={book.read} onChange={handleBookClick}/>
            </td>
            <td>
            {tags.map((tag,i) => (
                <button style={{border: '1px solid black', margin:'1px', padding:'10px'}} key={rndKey(i)}>{tag}</button>
            ))}
            </td>
            <td>
                <button style={{display:'inline-block', backgroundColor: 'tomato'}} onClick={handleRemoveBook}>Remove</button>
            </td>
        </tr>
    )
}