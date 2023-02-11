import React from 'react'

export default function Book({ book, toggleBook, removeBook }) {

    // toggle the book back and forth from [read <-> not read]
    function handleBookClick() {
        toggleBook(book.id)
    }

    // remove the book
    function handleRemoveBook() {
        removeBook(book.id)
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
                <button style={{display:'inline-block', backgroundColor: 'tomato'}} onClick={handleRemoveBook}>Remove Book</button>
            </td>
        </tr>
    )
}