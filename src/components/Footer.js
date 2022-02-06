import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer-container">
      <section className="footer-subscribtion">
        <p className="footer-subscribtion-heading">
          Join the Adventure newsletter to receive our best vacation deals
        </p>
        <p className="footer-subscribtion-text">
          you can insubscribe at any time
        </p>
        <div className="input-areas">
          <form>
            <input
              name="email"
              placeholder="your email"
              type="email"
              className="footer-input"
            />
            <Button buttonStyle="btn--outline">Subscribe</Button>
          </form>
        </div>
      </section>

      <div className="footer-links">
        <div className="footer-links-wrapper">
          <div className="footer-link-items">
            <h2>About us</h2>
            <Link to="/">How it works </Link>
            <Link to="/">Testimonials </Link>
            <Link to="/">Careers </Link>
            <Link to="/"> Investors </Link>
            <Link to="/">Terms of Servise </Link>
          </div>
          <div className="footer-link-items">
            <h2>Contact us</h2>
            <Link to="/">How it works </Link>
            <Link to="/">Testimonials </Link>
            <Link to="/">Careers </Link>
            <Link to="/"> Investors </Link>
            <Link to="/">Terms of Servise </Link>
          </div>
        </div>
        <div className="footer-links-wrapper">
          <div className="footer-link-items">
            <h2>Videos</h2>
            <Link to="/">How it works </Link>
            <Link to="/">Testimonials </Link>
            <Link to="/">Careers </Link>
            <Link to="/"> Investors </Link>
            <Link to="/">Terms of Servise </Link>
          </div>
          <div className="footer-link-items">
            <h2>Social Media</h2>
            <Link to="/">How it works </Link>
            <Link to="/">Testimonials </Link>
            <Link to="/">Careers </Link>
            <Link to="/"> Investors </Link>
            <Link to="/">Terms of Servise </Link>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link className="social-logo" to="/">
              TRLV <i className="fab fa-typo3"></i>
            </Link>
          </div>
          <small className="website-rights">TRLV A 2022</small>
          <div className="social-icons">
            <Link
              className="social-icon-link focebook"
              target="_blank"
              aria-lable="Facebook"
              to="/"
            >
              <i className="fab fa-fecabook-f"></i>
            </Link>
            <Link
              className="social-icon-link instagram"
              target="_blank"
              aria-lable="instagram"
              to="/"
            >
              <i className="fab fa-instagram"></i>
            </Link>
            <Link
              className="social-icon-link youtube"
              target="_blank"
              aria-lable="youtube"
              to="/"
            >
              <i className="fab fa-youtube"></i>
            </Link>
            <Link
              className="social-icon-link twitter"
              target="_blank"
              aria-lable="twitter"
              to="/"
            >
              <i className="fab fa-twitter"></i>
            </Link>
            <Link
              className="social-icon-link linkedin"
              target="_blank"
              aria-lable="linkedin"
              to="/"
            >
              <i className="fab fa-linkedin"></i>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
