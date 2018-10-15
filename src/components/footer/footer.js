import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <p className="footer-logo">Groove</p>
      <div className="footer__navs">
        <nav className="footer__navs__left">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
        <nav className="footer__navs__right">
          <ul>
            <li>
              <a href="">Customer Service</a>
            </li>
            <li>
              <a href="">Blog</a>
            </li>
            <li>
              <a href="">Term &amp; Conditions</a>
            </li>
          </ul>
        </nav>
      </div>
      <nav className="footer__navs__socialMedia">
        <ul className="margin-auto">
          <li>
            <a
              className="footer__navs__socialMedia--facebook"
              href="http://facebook.com"
              title="facebook"
            />
          </li>
          <li className="margin-left">
            <a
              className="footer__navs__socialMedia--twitter"
              href="http://twitter.com"
              title="twitter"
            />
          </li>
          <li className="margin-left">
            <a
              className="footer__navs__socialMedia--instagram"
              href="https://instagram.com"
              title="instagram"
            />
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
