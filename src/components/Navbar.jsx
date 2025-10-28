import React, { useState } from "react";
import "./Navbar.css";
import { FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  return (
    <nav className="navbar">
      {/* Mobile Menu Icon (Left) */}
      <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Logo (Left) */}
      <div className="navbar-logo">
        <img src="/logo.png" alt="Logo" />
      </div>

      {/* Center Links */}
      <div className={`navbar-links ${isMobileMenuOpen ? "active" : ""}`}>
        <a href="#">Home</a>
        <a href="#">About Us</a>
        <a href="#">Contact Us</a>

        <div
          className={`dropdown ${isDropdownOpen ? "active" : ""}`}
          onMouseEnter={() => setIsDropdownOpen(true)}
          onMouseLeave={() => setIsDropdownOpen(false)}
        >
          <a href="#">Our Product</a>
          <div className="dropdown-content">
            <a href="#">Product 1</a>
            <a href="#">Product 2</a>
            <a href="#">Product 3</a>
          </div>
        </div>

        {/* Login & Signup (Visible only in mobile) */}
        <div className="mobile-auth">
          <a href="#">Login</a>
          <a href="#">Signup</a>
        </div>
      </div>

      {/* Right Section (Cart, Login, Signup) */}
      <div className="navbar-actions">
        <a href="#" className="cart"><FaShoppingCart /></a>
        <a href="#" className="desktop-only">Login</a>
        <a href="#" className="desktop-only">Signup</a>
      </div>
    </nav>
  );
}

export default Navbar;
