import React from "react";
import Header from "../navs/HeaderSidebar";
import Sidebar from "../navs/Sidebar";

const AddListiening = () => {
  return (
    <>
      <Header />
      <Sidebar />
      <main id="main" className="main">
        <div className="pagetitle">
          <h1>Add Property</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="https://bootstrapmade.com/content/demo/NiceAdmin/index.html">
                  Home
                </a>
              </li>
              <li className="breadcrumb-item">Property</li>
              <li className="breadcrumb-item active">Add Property</li>
            </ol>
          </nav>
        </div>
        {/* End Page Title */}

        <section className="section">
          <div className="row">
            <div className="col-lg-2"></div>
            <div className="col-lg-8">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title"></h5>

                  {/* Floating Labels Form */}
                  <form className="row g-3">
                    <div className="col-md-12">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control"
                          id="floatingName"
                          placeholder="Your Name"
                        />
                        <label htmlFor="floatingName">Heading</label>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="form-floating">
                       <select
                          className="form-select"
                          id="floatingSelect"
                          aria-label="State"
                        >
                          <option defaultValue>Land</option>
                            <option value="townhouse">Townhouse</option>
                            <option value="villa">Villa</option>
                            <option value="apartment">Apartment</option>
                            <option value="flat">Flat</option>
                            <option value="condo">Condominium</option>
                            <option value="bungalow">Bungalow</option>
                            <option value="duplex">Duplex</option>
                            <option value="penthouse">Penthouse</option>
                            <option value="farmhouse">Farmhouse</option>
                            <option value="studio">Studio Apartment</option>
                            <option value="office">Office Space</option>
                            <option value="shop">Shop / Showroom</option>
                            <option value="warehouse">Warehouse</option>
                            <option value="industrial">Industrial Property</option>
                            <option value="co-living">Co-Living Space</option>
                            <option value="hotel">Hotel / Resort</option>      </select>
                        <label htmlFor="floatingSelect">Property Category</label>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="form-floating">
                        <input
                          type="number"
                          className="form-control"
                          id="Price"
                          placeholder="Price"
                        />
                        <label htmlFor="Price">Price</label>
                      </div>
                    </div>

                    <div className="col-6">
                      <div className="form-floating">
                        <textarea
                          className="form-control"
                          placeholder="Address"
                          id="floatingTextarea"
                          style={{ height: "50px" }}
                        ></textarea>
                        <label htmlFor="floatingTextarea">Address</label>
                      </div>
                    </div>
                    <div className="col-md-2">
                      <div className="col-md-12">
                        <div className="form-floating">
                          <input
                            type="text"
                            className="form-control"
                            id="floatingArea"
                            placeholder="Area"
                          />
                          <label htmlFor="floatingArea">Area</label>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="col-md-12">
                        <div className="form-floating">
                          <input
                            type="text"
                            className="form-control"
                            id="floatingCity"
                            placeholder="City"
                          />
                          <label htmlFor="floatingCity">City</label>
                        </div>
                      </div>
                    </div>

                   

                    <div className="col-md-3">
                      <div className="form-floating mb-3">
                        <input
                            type="text"
                            className="form-control"
                            id="floatingAreaSize"
                            placeholder="Area Size"
                          />
                          <label htmlFor="floatingArea">Area Size In Sq.Ft</label>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="form-floating">
                        <input
                          type="number"
                          className="form-control"
                          id=""
                          placeholder=""
                        />
                        <label htmlFor="">Bedrooms</label>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="form-floating">
                        <input
                          type="number"
                          className="form-control"
                          id=""
                          placeholder=""
                        />
                        <label htmlFor="">Bathrooms</label>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="form-floating">
                        <input
                          type="number"
                          className="form-control"
                          id=""
                          placeholder=""
                        />
                        <label htmlFor="">Parking</label>
                      </div>
                    </div>
                     
                    <div className="col-md-2">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control"
                          id="floatingZip"
                          placeholder="Zip"
                        />
                        <label htmlFor="floatingZip">Zip</label>
                      </div>
                    </div>

                    <div className="text-center">
                      <button type="submit" className="btn btn-primary">
                        Submit
                      </button>
                      <button type="reset" className="btn btn-secondary">
                        Reset
                      </button>
                    </div>
                  </form>
                  {/* End floating Labels Form */}
                </div>
              </div>
            </div>
            <div className="col-lg-2"></div>
          </div>
        </section>
      </main>
      {/* End #main */}
    </>
  );
};

export default AddListiening;
