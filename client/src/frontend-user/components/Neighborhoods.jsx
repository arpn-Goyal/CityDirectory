const Neighborhoods = () => {
  const neighborhoods = [
    {
      title: "Jumeirah Lagoons",
      img: "https://via.placeholder.com/400x250.png?text=Jumeirah+Lagoons"
    },
    {
      title: "Downtown Dubai",
      img: "https://via.placeholder.com/400x250.png?text=Downtown+Dubai"
    },
    {
      title: "The Valley",
      img: "https://via.placeholder.com/400x250.png?text=The+Valley"
    }
  ];

  return (
    <section className="py-5 bg-light">
      <div className="container">
        <h2 className="fw-bold mb-4">Discover Your Ideal Neighborhood in Dubai</h2>
        <div className="row g-4">
          {neighborhoods.map((n, i) => (
            <div className="col-md-4" key={i}>
              <div className="card border-0 shadow-sm h-100">
                <img
                  src={n.img}
                  className="card-img-top"
                  alt={n.title}
                  style={{ height: "220px", objectFit: "cover" }}
                />
                <div className="card-body text-center">
                  <h5 className="card-title fw-semibold">{n.title}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Neighborhoods;