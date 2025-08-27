const ContactFormFull = () => {
  return (
    <section className="bg-light py-5">
      <div className="container">
        <h3 className="text-center mb-4">Get In Touch</h3>
        <form className="row g-3">
          <div className="col-md-4">
            <input type="text" className="form-control" placeholder="Full Name" />
          </div>
          <div className="col-md-4">
            <input type="email" className="form-control" placeholder="Email" />
          </div>
          <div className="col-md-4">
            <input type="text" className="form-control" placeholder="Phone" />
          </div>
          <div className="col-12">
            <textarea className="form-control" rows="4" placeholder="Message"></textarea>
          </div>
          <div className="col-12 text-center">
            <button className="btn btn-dark px-4 py-2">Submit</button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default ContactFormFull;