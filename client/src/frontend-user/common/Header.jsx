import React from "react";

const Header = () => {
  return (
    <header className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
      <div className="container">
        <a className="navbar-brand fw-bold" href="#">
          PremiumDom
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div id="navbarNav" className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><a className="nav-link" href="#">Properties</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Get in Touch</a></li>
          </ul>
        </div>
      </div>
    </header>
  );
}




export default Header;
