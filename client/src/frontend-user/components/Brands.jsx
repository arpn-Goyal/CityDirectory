const Brands= () =>{
  const logos = [
    "https://primadom.ae/wp-content/uploads/2024/03/Damac.png",
    "https://primadom.ae/wp-content/uploads/2024/03/Omniyat.png",
    "https://primadom.ae/wp-content/uploads/2024/03/Dubai-Properties.png",
    "https://primadom.ae/wp-content/uploads/2024/03/Arada.png",
    "https://primadom.ae/wp-content/uploads/2024/03/Dar-Al-Arkan.png",
  ];

  return (
    <section className="py-4 bg-light">
      <div className="container d-flex justify-content-center flex-wrap gap-4">
        {logos.map((src, i) => (
          <img
            key={i}
            src={src}
            alt="brand logo"
            className="img-fluid"
            style={{ maxHeight: "50px", objectFit: "contain" }}
          />
        ))}
      </div>
    </section>
  );
}

export default Brands;