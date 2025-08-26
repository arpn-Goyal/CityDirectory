const InquiryForm = () =>{
  return (
    <section className="py-5">
      <div className="container">
        <div className="row align-items-center bg-white shadow rounded p-4">
          {/* Left Side Text */}
          <div className="col-md-6 mb-4 mb-md-0">
            <h2 className="fw-bold mb-3">Ready to find your perfect property?</h2>
            <p className="text-muted">
              Fill out the form below to connect with one of our expert real estate advisors and take the first step towards securing your dream home in Dubai. Whether you’re buying, selling, or investing, we’re here to make your real estate journey seamless and stress-free. Get started now!
            </p>
          </div>

          {/* Right Side Form */}
          <div className="col-md-6">
            <form className="row g-3">
              <h6 className="fw-bold">Personal Information</h6>
              <div className="col-md-12">
                <input type="text" className="form-control" placeholder="Full name" />
              </div>
              <div className="col-md-6">
                <input type="email" className="form-control" placeholder="Email address" />
              </div>
              <div className="col-md-6">
                <input type="tel" className="form-control" placeholder="Phone number" />
              </div>

              <h6 className="fw-bold mt-3">Property Information</h6>
              <div className="col-md-4">
                <select className="form-select">
                  <option>Type</option>
                  <option>Apartment</option>
                  <option>Villa</option>
                </select>
              </div>
              <div className="col-md-4">
                <select className="form-select">
                  <option>Area</option>
                  <option>Downtown</option>
                  <option>Marina</option>
                </select>
              </div>
              <div className="col-md-4">
                <select className="form-select">
                  <option>Bedrooms</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3+</option>
                </select>
              </div>

              <div className="col-12">
                <button type="submit" className="btn btn-dark w-100 py-2 fw-semibold">
                  SUBMIT
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default InquiryForm;
