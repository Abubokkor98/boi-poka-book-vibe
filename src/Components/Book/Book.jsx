import React from "react";

export default function Book({ book }) {
  const { bookName, author, image } = book;
  return (
    <div className="card  p-5 border rounded-xl">
      <figure className="bg-base-300 py-5 rounded-2xl">
        <img
          src={image}
          className="h-[166px]"
          alt={bookName}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {bookName}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>By: {author}</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">Fashion</div>
          <div className="badge badge-outline">Products</div>
        </div>
      </div>
    </div>
  );
}
