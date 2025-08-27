const SimilarProperties = () => {
  return (
    <section className="container my-5">
      <h3>Similar Properties</h3>
      <div className="row">
        {[1, 2, 3].map((item) => (
          <div className="col-md-4 mb-3" key={item}>
            <div className="card shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1568605114967-8130f3a36994"
                alt="Similar Property"
                className="card-img-top"
              />
              <div className="card-body">
                <h6>Luxury Apartment in Downtown</h6>
                <p className="text-muted">AED 1,200,000</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SimilarProperties;