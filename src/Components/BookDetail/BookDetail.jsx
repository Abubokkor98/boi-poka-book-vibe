import React from 'react'
import { useParams } from 'react-router-dom'

export default function BookDetail() {
  const {bookId} = useParams();
  console.log(bookId);
  return (
    <div>
        <h2>Book Detail {bookId}</h2>
    </div>
  )
}
