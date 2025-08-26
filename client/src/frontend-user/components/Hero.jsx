
const Hero = () =>{
  return (
    <section
      className="text-white text-center d-flex align-items-center"
      style={{
        backgroundImage:
          "url('https://primadom.ae/wp-content/uploads/2024/04/main-home.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "90vh",
      }}
    >
      <div className="container">
        <h1 className="fw-bold">Welcome to Your Gateway to Luxury Living in Dubai</h1>
        <p className="lead">
          Explore premium real estate listings from Dubai’s top developers.  
          Find your dream home today.
        </p>
        <form className="row g-2 justify-content-center">
          <div className="col-md-2">
            <select className="form-select">
              <option>Buy</option>
              <option>Rent</option>
            </select>
          </div>
          <div className="col-md-2">
            <input type="text" className="form-control" placeholder="City" />
          </div>
          <div className="col-md-2">
            <input type="text" className="form-control" placeholder="Type" />
          </div>
          <div className="col-md-2">
            <button className="btn btn-dark w-100">Search</button>
          </div>
        </form>
      </div>
    </section>
  );
}


export default Hero