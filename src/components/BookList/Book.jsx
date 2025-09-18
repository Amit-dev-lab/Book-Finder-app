import React from "react";
import { Link } from "react-router-dom";
import "./BookList.css";

const Book = ({ id, cover_img, title, author, edition_count, first_publish_year }) => {
  return (
    <div className="book-card">
      <Link to={`/book/${id}`} className="book-link">
        <div className="book-img-wrapper">
          <img src={cover_img} alt={title} className="book-img" />
        </div>
        <div className="book-info">
          <h3 className="book-title">{title}</h3>
          <p className="book-author">
            <span>Author:</span> {author.join(", ")}
          </p>
          <p className="book-meta">
            <span>Editions:</span> {edition_count}
          </p>
          <p className="book-meta">
            <span>First Published:</span> {first_publish_year}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default Book;
