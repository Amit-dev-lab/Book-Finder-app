import React from 'react';
import { useGlobalContext } from '../../context.';
import Book from "../BookList/Book";
import Loading from "../Loader/Loader";
import coverImg from "../../images/cover_not_found.jpg";
import "./BookList.css";

const BookList = () => {
  const { books, loading, resultTitle } = useGlobalContext();

  // Add cover image fallback
  const booksWithCovers = books.map((singleBook) => {
    return {
      ...singleBook,
      id: (singleBook.id).replace("/works/", ""),
      cover_img: singleBook.cover_id
        ? `https://covers.openlibrary.org/b/id/${singleBook.cover_id}-L.jpg`
        : coverImg,
    };
  });

  if (loading) return <Loading />;

  return (
    <section className="booklist">
      <div className="container">
        <div className="section-title text-center">
          <h2>{resultTitle || "Popular Books"}</h2>
          <div className="underline"></div>
        </div>

        {booksWithCovers.length === 0 ? (
          <p className="no-results text-center">No books found. Try another search!</p>
        ) : (
          <div className="booklist-content grid">
            {booksWithCovers.slice(0, 30).map((item, index) => {
              return <Book key={index} {...item} />;
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default BookList;
