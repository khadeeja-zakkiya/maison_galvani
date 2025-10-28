import React from "react";
import "./Footer.css";

// Import logo from src/assets
import logoImg from "../assets/footerlogo.png";

// Import icons from react-icons
import { FaCcVisa, FaCcMastercard, FaCcPaypal, FaCcAmazonPay } from "react-icons/fa";
import { FaInstagram, FaWhatsapp, FaYoutube, FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo Section */}
        <div className="footer-logo">
          <img src={logoImg} alt="Logo" />
        </div>

        {/* Links */}
        <div className="footer-links">
          <a href="#">FAQ</a>
          <a href="#">Return & Shipping Policy</a>
          <a href="#">Terms & Conditions</a>
          <a href="#">Privacy Policy</a>
        </div>

        {/* Payment Icons */}
        <div className="footer-payments">
          <FaCcVisa className="payment-icon" />
          <FaCcMastercard className="payment-icon" />
          <FaCcPaypal className="payment-icon" />
          <FaCcAmazonPay className="payment-icon" />
        </div>

        {/* Social Icons */}
        <div className="footer-social">
          <a href="#"><FaWhatsapp /></a>
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaYoutube /></a>
          <a href="#"><FaFacebookF /></a>
        </div>
      </div>

      <div className="footer-bottom">
        &copy; 2025 YourCompany. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
