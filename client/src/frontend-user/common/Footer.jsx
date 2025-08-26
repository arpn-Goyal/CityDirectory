function Footer() {
  return (
    <footer className="bg-dark text-white pt-5 pb-3">
      <div className="container">
        <div className="row">
          {/* Newsletter */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold">Stay in the loop</h5>
            <p className="small text-muted">
              Subscribe to get property insights and new project updates.
            </p>
            <form className="d-flex">
              <input
                type="email"
                className="form-control me-2"
                placeholder="Your email"
              />
              <button className="btn btn-outline-light">Subscribe</button>
            </form>
          </div>

          {/* About */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold">About Us</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-muted text-decoration-none">Our Story</a></li>
              <li><a href="#" className="text-muted text-decoration-none">Careers</a></li>
              <li><a href="#" className="text-muted text-decoration-none">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold">Services</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-muted text-decoration-none">Property Buying</a></li>
              <li><a href="#" className="text-muted text-decoration-none">Property Selling</a></li>
              <li><a href="#" className="text-muted text-decoration-none">Leasing</a></li>
              <li><a href="#" className="text-muted text-decoration-none">Commercial Projects</a></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-secondary" />

        {/* Bottom Row */}
        <div className="d-flex justify-content-between align-items-center flex-wrap">
          <p className="mb-0 small text-muted">
            © {new Date().getFullYear()} Primadom Real Estate. All rights reserved.
          </p>
          <div className="d-flex gap-3">
            <a href="#" className="text-muted"><i className="bi bi-facebook"></i></a>
            <a href="#" className="text-muted"><i className="bi bi-instagram"></i></a>
            <a href="#" className="text-muted"><i className="bi bi-linkedin"></i></a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;