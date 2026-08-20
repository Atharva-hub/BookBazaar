import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="container py-5">
   
      <div className="text-center mb-5">
        <span className="badge bg-primary-subtle text-primary fs-6 px-3 py-2 rounded-pill mb-3 fw-bold">
          📖 About BookBazaar
        </span>
        <h1 className="display-4 fw-extrabold mb-3">Connecting Readers with Knowledge</h1>
        <p className="lead text-muted mx-auto" style={{ maxWidth: '700px' }}>
          BookBazaar is a modern, easy-to-use online bookstore crafted to bring your favorite paperbacks, self-help guides, programming books, and classic literature right to your doorstep.
        </p>
      </div>


      <div className="row g-4 mb-5">
        <div className="col-md-6">
          <div className="card h-100 p-4 border-0 shadow-sm bg-body-tertiary rounded-4">
            <div className="fs-1 mb-3">🎯</div>
            <h3 className="fw-bold mb-2">Our Mission</h3>
            <p className="text-muted">
              Our mission is to foster a love for reading by providing affordable, authentic, and easily accessible books to readers all over the country. We believe books have the power to transform lives and spark curiosity.
            </p>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card h-100 p-4 border-0 shadow-sm bg-body-tertiary rounded-4">
            <div className="fs-1 mb-3">🚀</div>
            <h3 className="fw-bold mb-2">Our Vision</h3>
            <p className="text-muted">
              We envision a seamless digital platform where book lovers of all ages can discover trending bestsellers, manage personal wishlists, and order their next favorite books with absolute ease and convenience.
            </p>
          </div>
        </div>
      </div>


      <div className="bg-primary text-white p-5 rounded-4 mb-5 shadow-sm text-center">
        <div className="row g-4">
          <div className="col-6 col-md-3">
            <h2 className="display-5 fw-bold mb-1">10,000+</h2>
            <p className="mb-0 text-white-50">Books Available</p>
          </div>
          <div className="col-6 col-md-3">
            <h2 className="display-5 fw-bold mb-1">50,000+</h2>
            <p className="mb-0 text-white-50">Happy Readers</p>
          </div>
          <div className="col-6 col-md-3">
            <h2 className="display-5 fw-bold mb-1">4.9 ★</h2>
            <p className="mb-0 text-white-50">Average Rating</p>
          </div>
          <div className="col-6 col-md-3">
            <h2 className="display-5 fw-bold mb-1">24/7</h2>
            <p className="mb-0 text-white-50">Customer Support</p>
          </div>
        </div>
      </div>


      <div className="mb-5">
        <h3 className="fw-bold text-center mb-4">Built with Modern Technologies</h3>
        <div className="row g-3 justify-content-center text-center">
          <div className="col-6 col-sm-3 col-md-2">
            <div className="p-3 border rounded-3 bg-body-tertiary">
              <div className="fs-3 mb-1">⚛️</div>
              <span className="fw-bold">React 19</span>
            </div>
          </div>
          <div className="col-6 col-sm-3 col-md-2">
            <div className="p-3 border rounded-3 bg-body-tertiary">
              <div className="fs-3 mb-1">🎨</div>
              <span className="fw-bold">Bootstrap 5</span>
            </div>
          </div>
          <div className="col-6 col-sm-3 col-md-2">
            <div className="p-3 border rounded-3 bg-body-tertiary">
              <div className="fs-3 mb-1">⚡</div>
              <span className="fw-bold">Vite</span>
            </div>
          </div>
          <div className="col-6 col-sm-3 col-md-2">
            <div className="p-3 border rounded-3 bg-body-tertiary">
              <div className="fs-3 mb-1">🔄</div>
              <span className="fw-bold">Context API</span>
            </div>
          </div>
        </div>
      </div>


      <div className="text-center py-4">
        <h3 className="fw-bold mb-3">Ready to start reading?</h3>
        <Link to="/book" className="btn btn-warning btn-lg rounded-pill px-5 fw-bold shadow-sm">
          Explore Books Catalog 📚
        </Link>
      </div>
    </div>
  );
};

export default About;