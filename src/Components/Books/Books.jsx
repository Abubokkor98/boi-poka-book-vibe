import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react'

export default function Books() {

    const [books, setBooks] = useState([]);

    useEffect(()=>{
        fetch('./booksData.json')
        .then(res=> res.json())
        .then(data=> setBooks(data))
    },[])

  return (
    <div>
        <h2 className='text-4xl font-bold text-center'>Books</h2>
        <p>Books: {books.length}</p>
    </div>
  )
}
