import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { addToStoredReadList } from "../../Utility/AddToDb";
import { addToWishList } from "../../Utility/AddToWishList";

export default function BookDetail() {
  const { bookId } = useParams();
  const id = parseInt(bookId);
  const data = useLoaderData();

  //   console.log(typeof bookId, typeof id, typeof data[0].bookId);

  const book = data.find((book) => book.bookId === id);
  console.log(book);

  const handleMarkAsRead = (id) => {
    /**
     * 1. understand what to store or save: => bookId
     * 2. where to store:
     * 3. array, list, collection:
     * 4. if the book is already in the readList.
     * 5. if not, then add the book to the list.
     * 6. if yes, do not add the book.
     */
    addToStoredReadList(id);
  };

  const handleAddToWishlist = (id) => {
    addToWishList(id);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 p-5">
      <div>
        <img src={book.image} alt="" />
      </div>
      <div className="space-y-5">
        <h1 className="text-5xl">{book.bookName}</h1>
        <p>By: {book.author}</p>
        <hr />
        {book.category}
        <hr />
        <p>
          <span className="font-bold">Review </span>
          {book.review}
        </p>
        <hr />
        <p>
          Number of Pages: <span className="font-bold">{book.totalPages}</span>
        </p>
        <p>publisher: {book.publisher}</p>
        <p>Year of Publishing {book.yearOfPublishing}</p>
        <p>Rating {book.rating}</p>
        <div className="md:flex gap-5">
          <button onClick={()=>handleMarkAsRead(bookId)} className="btn btn-outline mr-5">
            MArk As Read
          </button>
          <button onClick={()=>handleAddToWishlist(bookId)} className="btn btn-accent">
            Add to Wishlist
          </button>
        </div>
      </div>
    </div>
  );
}
