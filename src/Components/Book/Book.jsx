import { key } from "localforage";
import React from "react";
import { Link } from "react-router-dom";

export default function Book({ book }) {
  const {bookId, bookName, author, image, tags, category, rating } = book;
  return (
    <Link to={`books/${bookId}`}>
      <div className="card p-5 border rounded-xl">
        <figure className="bg-base-300 py-5 rounded-2xl">
          <img src={image} className="h-[166px]" alt={bookName} />
        </figure>
        <div className="card-body">
          <div className="flex justify-center gap-5">
            {tags.map((tag,index) => (
              <button key={index} className="btn btn-xs text-green-500">{tag}</button>
            ))}
          </div>
          <h2 className="card-title">{bookName}</h2>
          <p>By: {author}</p>
          <hr />
          <div className="card-actions justify-between">
            <div className="">{category}</div>
            <div className="">{rating}</div>
          </div>
        </div>
      </div>
    </Link>
  );
}
