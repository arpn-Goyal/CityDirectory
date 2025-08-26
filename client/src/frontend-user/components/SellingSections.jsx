function SellingSection() {
  return (
    <section className="container my-5">
      <div className="card shadow border-0 rounded-4 overflow-hidden">
        <div className="row g-0 align-items-center">
          {/* Left Content */}
          <div className="col-md-6 p-5">
            <h3 className="fw-bold">Interested in selling your home?</h3>
            <p className="text-muted">
              Sell your home with our agents. House prices, inspections,
              negotiations and other services are included in the house price.
            </p>
            <button className="btn btn-dark px-4 py-2 fw-semibold">
              Contact Us
            </button>
          </div>

          {/* Right Image */}
          <div className="col-md-6">
            <img
              src="https://images.unsplash.com/photo-1505761671935-60b3a7427bad"
              alt="City view"
              className="img-fluid h-100 w-100 object-fit-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default SellingSection;