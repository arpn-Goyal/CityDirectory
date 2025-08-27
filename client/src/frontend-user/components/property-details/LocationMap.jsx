const  LocationMap = () => {
  return (
    <section className="container my-5">
      <h3>Location</h3>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!..."
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        title="Property Location"
      ></iframe>
    </section>
  );
}

export default LocationMap;
