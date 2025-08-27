import React from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";

const Contact = () => {
  return (
    <>
    <Header/>
    <main>
      {/* Hero Section */}
      <section className="position-relative text-white text-center">
        <img
          src="/images/dubai-skyline.jpg"
          alt="Dubai Skyline"
          className="w-100"
          style={{ height: "400px", objectFit: "cover" }}
        />
        <div className="position-absolute top-50 start-50 translate-middle">
          <h1 className="fw-bold">Get in Touch with Us</h1>
        </div>
      </section>

      {/* Contact Section */}
      <section className="container py-5">
        <div className="row">
          {/* Left Form */}
          <div className="col-md-7 mb-4">
            <p>
              Have questions or ready to start your real estate journey? We’re here
              to help! Contact our team at Primadom Real Estate to speak with a
              knowledgeable representative who can assist you with all your
              inquiries.
            </p>
            <form>
              <div className="row mb-3">
                <div className="col-md-6">
                  <input type="text" className="form-control" placeholder="Full Name" />
                </div>
                <div className="col-md-6">
                  <input type="email" className="form-control" placeholder="Email" />
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-md-6">
                  <input type="text" className="form-control" placeholder="Mobile Number" />
                </div>
              </div>
              <div className="mb-3">
                <textarea className="form-control" rows="4" placeholder="Message"></textarea>
              </div>
              <div className="form-check mb-3">
                <input type="checkbox" className="form-check-input" id="consentCheck" />
                <label className="form-check-label" htmlFor="consentCheck">
                  I consent to having this website store my submitted information
                </label>
              </div>
              <button type="submit" className="btn btn-primary px-4">
                Send
              </button>
            </form>
          </div>

          {/* Right Info */}
          <div className="col-md-5">
            <h5>For information contact:</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <i className="bi bi-geo-alt-fill me-2"></i>
                103, Clover Bay, Business Bay, Dubai, UAE
              </li>
              <li className="mb-2">
                <i className="bi bi-telephone-fill me-2"></i> +971 4 572 3628
              </li>
              <li className="mb-2">
                <i className="bi bi-envelope-fill me-2"></i> info@primadom.ae
              </li>
            </ul>
            <p>
              Follow us for updates on Dubai’s property market, the latest property
              listings, and glimpses of our special moments at our office.
            </p>
            <div className="d-flex gap-3">
              <a href="#"><i className="bi bi-facebook fs-4"></i></a>
              <a href="#"><i className="bi bi-linkedin fs-4"></i></a>
              <a href="#"><i className="bi bi-instagram fs-4"></i></a>
              <a href="#"><i className="bi bi-whatsapp fs-4"></i></a>
            </div>
          </div>
        </div>
      </section>
    </main>
    <Footer/>
    </>
  );
};

export default Contact;
