function Team() {
  const members = [
    {
      name: "Yohan S. Menon",
      role: "CEO",
      img: "https://via.placeholder.com/200x200.png?text=Person+1",
      languages: "English"
    },
    {
      name: "Imran Latif",
      role: "Managing Director",
      img: "https://via.placeholder.com/200x200.png?text=Person+2",
      languages: "English, Hindi"
    },
    {
      name: "Nilton D'Souza",
      role: "Senior Real Estate Advisor",
      img: "https://via.placeholder.com/200x200.png?text=Person+3",
      languages: "English, Russian, Urdu"
    },
    {
      name: "Sara Al Najjar",
      role: "Real Estate Advisor",
      img: "https://via.placeholder.com/200x200.png?text=Person+4",
      languages: "English, Arabic"
    }
  ];

  return (
    <section className="py-5 bg-light">
      <div className="container">
        <h2 className="fw-bold mb-5 text-center">Meet Our Expert Team</h2>
        <div className="row g-4">
          {members.map((m, i) => (
            <div className="col-md-3 col-sm-6 text-center" key={i}>
              <div className="card border-0 shadow-sm h-100">
                <img
                  src={m.img}
                  alt={m.name}
                  className="card-img-top rounded-circle mx-auto mt-3"
                  style={{
                    width: "120px",
                    height: "120px",
                    objectFit: "cover"
                  }}
                />
                <div className="card-body">
                  <h5 className="fw-semibold">{m.name}</h5>
                  <p className="text-muted mb-1">{m.role}</p>
                  <p className="small">Languages: {m.languages}</p>
                  <button className="btn btn-outline-dark btn-sm">
                    View Profile
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Team;