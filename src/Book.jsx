import React from 'react'

export default function Book({ book, toggleBook}) {

    function handleBookClick() {
        toggleBook(book.id)
    }

    return (
        <div>
            <input type="checkbox" checked={book.read} onChange={handleBookClick}/>
            {book.name}
        </div> 
    )
}