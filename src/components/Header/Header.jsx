import React from "react";
import Navbar from "../Navbar/Navbar";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";

const Header = () => {
  return (
    <div className="holder">
      <div className="header">
        <Navbar />
        <div className="header-content">
          <h1 className="header-title">
            Discover Your Next <span>Favorite Book</span>
          </h1>
          <p className="header-text">
            Unlock the world of knowledge, stories, and inspiration. Search from
            thousands of titles and find the book that matches your passion.
          </p>
          <SearchForm />
        </div>
      </div>
    </div>
  );
};

export default Header;
