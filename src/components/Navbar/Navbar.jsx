import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logoImg from "../../images/logo.png";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleNavbar = () => setToggleMenu(!toggleMenu);

  // Add background on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) setScrolled(true);
      else setScrolled(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`} id="navbar">
      <div className="container navbar-content flex">
        {/* Logo */}
        <div className="brand-and-toggler flex flex-sb">
          <Link to="/" className="navbar-brand flex">
            <img src={logoImg} alt="site logo" />
            <span className="fw-7 fs-24">ReadOra</span>
          </Link>

          {/* Toggler (mobile) */}
          <button
            type="button"
            className="navbar-toggler-btn"
            onClick={handleNavbar}
          >
            <HiOutlineMenuAlt3
              size={30}
              style={{
                color: toggleMenu ? "#fff" : scrolled ? "#111" : "#fff",
              }}
            />
          </button>
        </div>

        {/* Menu */}
         <div className={toggleMenu ? "navbar-collapse show-navbar-collapse" : "navbar-collapse"}>
          <ul className = "navbar-nav">
            <li className="nav-item">
  <Link to="/book" className="nav-link text-uppercase text-white fs-22 fw-6 ls-1">
    Home
  </Link>
</li>
<li className="nav-item">
  <Link to="/about" className="nav-link text-uppercase text-white fs-22 fw-6 ls-1">
    About
  </Link>
</li>

          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
