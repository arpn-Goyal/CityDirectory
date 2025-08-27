const PropertyHero= () => {
  return (
    <section className="container my-5">
      <div className="row">
        {/* Left Image Gallery */}
        <div className="col-md-8">
          <div id="propertyCarousel" className="carousel slide">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src="https://images.unsplash.com/photo-1505761671935-60b3a7427bad"
                  className="d-block w-100 rounded"
                  alt="Property"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="https://images.unsplash.com/photo-1505691938895-1758d7feb511"
                  className="d-block w-100 rounded"
                  alt="Property"
                />
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#propertyCarousel" data-bs-slide="prev">
              <span className="carousel-control-prev-icon"></span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#propertyCarousel" data-bs-slide="next">
              <span className="carousel-control-next-icon"></span>
            </button>
          </div>
          <h2 className="mt-3">Exquisite Seaside Investor Deal | Modern Design</h2>
          <p className="text-muted">Dubai | 5 Beds | 6 Baths | 6200 sqft</p>
        </div>

        {/* Right Sidebar */}
        <div className="col-md-4">
          <div className="card shadow p-4">
            <h4 className="fw-bold">AED 3,400,000</h4>
            <p className="text-muted">Starting Price</p>
            <form>
              <input type="text" className="form-control mb-3" placeholder="Full Name" />
              <input type="email" className="form-control mb-3" placeholder="Email" />
              <input type="text" className="form-control mb-3" placeholder="Phone" />
              <button className="btn btn-dark w-100">Request Details</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PropertyHero;
