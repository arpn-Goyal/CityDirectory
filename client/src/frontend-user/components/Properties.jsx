const Properties = () =>{
  const properties = [
    {
      title: "Grande 3BR Prime Location | Downtown",
      price: "AED 5,200,000",
      img: "https://primadom.ae/wp-content/uploads/2025/03/f5ea5ce8-06f9-11f0-b947-069feffd091f.avif",
      beds: 3,
      baths: 4,
      size: "2,500 sqft",
      type: "Apartment"
    },
    {
      title: "Exclusive Modern Dubai Marina Design",
      price: "AED 3,400,000",
      img: "https://primadom.ae/wp-content/uploads/2025/04/c62c0540-112e-11f0-acd8-faf5a8211db6.avif",
      beds: 2,
      baths: 3,
      size: "1,800 sqft",
      type: "Villa"
    },
    {
      title: "Private Beach View Upgraded Villa",
      price: "AED 7,600,000",
      img: "https://primadom.ae/wp-content/uploads/2025/04/f00d0880-240a-11f0-8ec5-ee43be9a9b21-1536x1152.avif",
      beds: 4,
      baths: 5,
      size: "3,200 sqft",
      type: "Villa"
    },
    {
      title: "Garden Facing 1BR Sea & Canal View",
      price: "AED 1,200,000",
      img: "https://primadom.ae/wp-content/uploads/2025/03/f5ea5ce8-06f9-11f0-b947-069feffd091f.avif",
      beds: 1,
      baths: 2,
      size: "900 sqft",
      type: "Apartment"
    },
    {
      title: "High Floor Downtown View",
      price: "AED 2,900,000",
      img: "https://primadom.ae/wp-content/uploads/2025/04/c62c0540-112e-11f0-acd8-faf5a8211db6.avif",
      beds: 2,
      baths: 2,
      size: "1,400 sqft",
      type: "Apartment"
    },
    {
      title: "Business Bay Canal Multiple Options",
      price: "AED 2,200,000",
      img: "https://primadom.ae/wp-content/uploads/2025/04/f00d0880-240a-11f0-8ec5-ee43be9a9b21-1536x1152.avif",
      beds: 2,
      baths: 2,
      size: "1,500 sqft",
      type: "Apartment"
    }
  ];

  return (
    <section className="py-5">
      <div className="container">
        <h2 className="fw-bold mb-4">Explore Iconic Properties</h2>
        <div className="row g-4">
          {properties.map((p, i) => (
            <div className="col-md-4" key={i}>
              <div className="card h-100 shadow-sm border-0">
                <img
                  src={p.img}
                  className="card-img-top"
                  alt={p.title}
                  style={{ height: "220px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5 className="card-title">{p.title}</h5>
                  <p className="text-muted mb-1">{p.type}</p>
                  <p className="fw-bold text-dark">{p.price}</p>
                  <ul className="list-inline small text-muted mb-0">
                    <li className="list-inline-item me-3">
                      🛏 {p.beds} Beds
                    </li>
                    <li className="list-inline-item me-3">
                      🛁 {p.baths} Baths
                    </li>
                    <li className="list-inline-item">
                      📐 {p.size}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-4">
          <button className="btn btn-outline-dark px-4">Load More</button>
        </div>
      </div>
    </section>
  );
}

export default Properties;