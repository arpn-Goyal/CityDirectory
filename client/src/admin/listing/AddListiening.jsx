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
          <h1>Form Layouts</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="https://bootstrapmade.com/content/demo/NiceAdmin/index.html">
                  Home
                </a>
              </li>
              <li className="breadcrumb-item">Forms</li>
              <li className="breadcrumb-item active">Layouts</li>
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
                  <h5 className="card-title">Floating labels Form</h5>

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
                        <label htmlFor="floatingName">Your Name</label>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="form-floating">
                        <input
                          type="email"
                          className="form-control"
                          id="floatingEmail"
                          placeholder="Your Email"
                        />
                        <label htmlFor="floatingEmail">Your Email</label>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="form-floating">
                        <input
                          type="password"
                          className="form-control"
                          id="floatingPassword"
                          placeholder="Password"
                        />
                        <label htmlFor="floatingPassword">Password</label>
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="form-floating">
                        <textarea
                          className="form-control"
                          placeholder="Address"
                          id="floatingTextarea"
                          style={{ height: "100px" }}
                        ></textarea>
                        <label htmlFor="floatingTextarea">Address</label>
                      </div>
                    </div>

                    <div className="col-md-6">
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

                    <div className="col-md-4">
                      <div className="form-floating mb-3">
                        <select
                          className="form-select"
                          id="floatingSelect"
                          aria-label="State"
                        >
                          <option defaultValue>New York</option>
                          <option value="1">Oregon</option>
                          <option value="2">DC</option>
                        </select>
                        <label htmlFor="floatingSelect">State</label>
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
