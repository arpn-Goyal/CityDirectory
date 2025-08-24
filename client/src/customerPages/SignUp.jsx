import { useState } from "react";
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
const API_URL = import.meta.env.VITE_SERVER_ORIGIN;
 
const SignUp = () => {
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("Select Role");
  const [password, setPassword] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const navigate = useNavigate();
  
  const handleSubmit = async (e) =>{
    e.preventDefault();

    // if(!email || !role || !password || !mobileNumber){
    //     alert('Set All fields');
    //     return;
    // }

    try {
      // make API call
      const response = await axios.post(`${API_URL}/api/register`, {email, role, password, mobileNumber});
      if(response.status === 201 || response.status === 200){
        alert("User registered Succesfully");
        navigate('/login');
      }
    } catch (error) {
      console.log("Registration error:", error);
      alert(error.response?.data?.msg || "Something went wrong!");
    }
  }
  return (
    <>
      {/* <!-- Page content --> */}
      <main
        className="content-wrapper w-100 px-3 ps-lg-5 pe-lg-4 mx-auto"
        style={{ maxWidth: "1920px" }}
      >
        <div className="d-lg-flex">
          {/* <!-- Login form + Footer --> */}
          <div
            className="d-flex flex-column min-vh-100 w-100 py-4 mx-auto me-lg-5"
            style={{ maxWidth: "416px" }}
          >
            {/* <!-- Logo --> */}
            <header className="navbar px-0 pb-4 mt-n2 mt-sm-0 mb-2 mb-md-3 mb-lg-4">
              <a className="navbar-brand pt-0" href="index.html">
                <span className="d-flex flex-shrink-0 text-primary rtl-flip me-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="35"
                    height="34"
                  >
                    <path
                      d="M34.5 16.894v10.731c0 3.506-2.869 6.375-6.375 6.375H17.5h-.85C7.725 33.575.5 26.138.5 17c0-9.35 7.65-17 17-17s17 7.544 17 16.894z"
                      fill="currentColor"
                    />
                    <g fillRule="evenodd">
                      <path
                        d="M17.5 13.258c-3.101 0-5.655 2.554-5.655 5.655s2.554 5.655 5.655 5.655 5.655-2.554 5.655-5.655-2.554-5.655-5.655-5.655zm-9.433 5.655c0-5.187 4.246-9.433 9.433-9.433s9.433 4.246 9.433 9.433a9.36 9.36 0 0 1-1.569 5.192l2.397 2.397a1.89 1.89 0 0 1 0 2.671 1.89 1.89 0 0 1-2.671 0l-2.397-2.397a9.36 9.36 0 0 1-5.192 1.569c-5.187 0-9.433-4.246-9.433-9.433z"
                        fill="#000"
                        fillOpacity=".05"
                      />
                      <g fill="#fff">
                        <path d="M17.394 10.153c-3.723 0-6.741 3.018-6.741 6.741s3.018 6.741 6.741 6.741 6.741-3.018 6.741-6.741-3.018-6.741-6.741-6.741zM7.347 16.894A10.05 10.05 0 0 1 17.394 6.847 10.05 10.05 0 0 1 27.44 16.894 10.05 10.05 0 0 1 17.394 26.94 10.05 10.05 0 0 1 7.347 16.894z" />
                        <path d="M23.025 22.525c.645-.645 1.692-.645 2.337 0l3.188 3.188c.645.645.645 1.692 0 2.337s-1.692.645-2.337 0l-3.187-3.187c-.645-.646-.645-1.692 0-2.337z" />
                      </g>
                    </g>
                    <path
                      d="M23.662 14.663c2.112 0 3.825-1.713 3.825-3.825s-1.713-3.825-3.825-3.825-3.825 1.713-3.825 3.825 1.713 3.825 3.825 3.825z"
                      fill="#fff"
                    />
                    <path
                      fillRule="evenodd"
                      d="M23.663 8.429a2.41 2.41 0 0 0-2.408 2.408 2.41 2.41 0 0 0 2.408 2.408 2.41 2.41 0 0 0 2.408-2.408 2.41 2.41 0 0 0-2.408-2.408zm-5.242 2.408c0-2.895 2.347-5.242 5.242-5.242s5.242 2.347 5.242 5.242-2.347 5.242-5.242 5.242-5.242-2.347-5.242-5.242z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
                Finder
              </a>
            </header>

            <h1 className="h2 mt-auto">Create an account</h1>
            <div className="nav fs-sm mb-3 mb-lg-4">
              I already have an account
              <a
                className="nav-link text-decoration-underline p-0 ms-2"
                href="account-signin.html"
              >
                Sign in
              </a>
            </div>
            <div className="nav fs-sm mb-4 d-lg-none">
              <span className="me-2">Uncertain about creating an account?</span>
              <a
                className="nav-link text-decoration-underline p-0"
                href="#benefits"
                data-bs-toggle="offcanvas"
                aria-controls="benefits"
              >
                Explore the Benefits
              </a>
            </div>

            {/* <!-- Form --> */}
            <form className="needs-validation" onSubmit={handleSubmit} noValidate>
              <div className="position-relative mb-4">
                <label htmlFor="register-email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control form-control-lg"
                  id="register-email"
                  placeholder="Enter Email"
                  value={email}
                  onChange={(e)=>{setEmail(e.target.value)}}
                  required
                />
                <div className="invalid-tooltip bg-transparent py-0">
                  Enter a valid email address!
                </div>
              </div>
              <div className="mb-4">
                <label htmlFor="register-password" className="form-label">
                  Password
                </label>
                <div className="password-toggle">
                  <input
                    type="password"
                    className="form-control form-control-lg"
                    id="register-password"
                    minLength="8"
                    placeholder="Minimum 8 characters"
                    value={password}
                    onChange={(e)=>{setPassword(e.target.value)}}
                    required
                  />
                  <div className="invalid-tooltip bg-transparent py-0">
                    Password does not meet the required criteria!
                  </div>
                  <label
                    className="password-toggle-button fs-lg"
                    aria-label="Show/hide password"
                  >
                    <input type="checkbox" className="btn-check" />
                  </label>
                </div>
              </div>
              <div className="mb-4">
                <label htmlFor="register-email" className="form-label">
                  Role
                </label>
                {/* <input type="email" className="form-control form-control-lg" id="register-email" required /> */}
                <select
                  name="role"
                  id="registered-role"
                  className="form-control form-control-lg"
                  value={role}
                  onChange={(e)=> {setRole(e.target.value)}}
                >
                  <option value="">Select Role</option>
                  <option value="User">User</option>
                  <option value="Vendor">Vendor</option>
                </select>
                <div className="invalid-tooltip bg-transparent py-0">
                  Enter a valid email address!
                </div>
              </div>
              <div className="mb-4">
                <label htmlFor="register-email" className="form-label">
                  Mobile Number
                </label>
                <input
                  type="number"
                  className="form-control form-control-lg"
                  id="register-mobile"
                  onChange={(e)=> {setMobileNumber(e.target.value)}}
                  required
                />
                <div className="invalid-tooltip bg-transparent py-0">
                  Enter a valid email address!
                </div>
              </div>

              <div className="d-flex flex-column gap-2 mb-4">
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="save-pass"
                  />
                  <label htmlFor="save-pass" className="form-check-label">
                    Save the password
                  </label>
                </div>
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="privacy"
                    required
                  />
                  <label htmlFor="privacy" className="form-check-label">
                    I have read and accept the{" "}
                    <a className="text-dark-emphasis" href="#!">
                      Privacy Policy
                    </a>
                  </label>
                </div>
              </div>
              <button type="submit" className="btn btn-lg btn-primary w-100">
                Create an account
                <i className="fi-chevron-right fs-lg ms-1 me-n1"></i>
              </button>
            </form>

            {/* <!-- Divider --> */}
            <div className="d-flex align-items-center my-4">
              <hr className="w-100 m-0" />
              <span className="text-body-emphasis fw-medium text-nowrap mx-4">
                or continue with
              </span>
              <hr className="w-100 m-0" />
            </div>

            {/* <!-- Social login --> */}
            <div className="d-flex flex-column flex-sm-row gap-3 pb-4 mb-3 mb-lg-4">
              <button
                type="button"
                className="btn btn-lg btn-outline-secondary w-100 px-2"
              >
                <i className="fi-google ms-1 me-1"></i>
                Google
              </button>
              <button
                type="button"
                className="btn btn-lg btn-outline-secondary w-100 px-2"
              >
                <i className="fi-facebook ms-1 me-1"></i>
                Facebook
              </button>
              <button
                type="button"
                className="btn btn-lg btn-outline-secondary w-100 px-2"
              >
                <i className="fi-apple ms-1 me-1"></i>
                Apple
              </button>
            </div>

            {/* <!-- Footer --> */}
            <footer className="mt-auto">
              <div className="nav mb-4">
                <a
                  className="nav-link text-decoration-underline p-0"
                  href="help-topics-v1.html"
                >
                  Need help?
                </a>
              </div>
              <p className="fs-xs mb-0">
                &copy; All rights reserved. Made by{" "}
                <a
                  className="hover-effect-underline text-dark-emphasis text-decoration-none"
                  href="https://themeforest.net/user/srbthemes/portfolio"
                  target="_blank"
                  rel="noreferrer"
                >
                  SRBThemes
                </a>
              </p>
            </footer>
          </div>

          {/* <!-- Benefits section that turns into offcanvas on screens < 992px wide (lg breakpoint) --> */}
          <div
            className="offcanvas-lg offcanvas-end w-100 py-lg-4 ms-auto"
            id="benefits"
            style={{ maxWidth: "1034px" }}
          >
            <div className="offcanvas-header justify-content-end position-relative z-2 p-3">
              <button
                type="button"
                className="btn btn-icon btn-outline-dark text-dark border-dark bg-transparent rounded-circle d-none-dark"
                data-bs-dismiss="offcanvas"
                data-bs-target="#benefits"
                aria-label="Close"
              >
                <i className="fi-close fs-lg"></i>
              </button>
              <button
                type="button"
                className="btn btn-icon btn-outline-dark text-light border-light bg-transparent rounded-circle d-none d-inline-flex-dark"
                data-bs-dismiss="offcanvas"
                data-bs-target="#benefits"
                aria-label="Close"
              >
                <i className="fi-close fs-lg"></i>
              </button>
            </div>
            <span className="position-absolute top-0 start-0 w-100 h-100 bg-info-subtle d-lg-none"></span>
            <div className="offcanvas-body position-relative z-2 d-lg-flex flex-column align-items-center justify-content-center h-100 pt-2 px-3 p-lg-0">
              <span className="position-absolute top-0 start-0 w-100 h-100 bg-info-subtle rounded-5 d-none d-lg-block"></span>
              <div className="position-relative z-2 w-100 text-center px-md-2 p-lg-5">
                <h2 className="h4 pb-3">Finder account benefits</h2>
                <div className="mx-auto" style={{ maxWidth: "790px" }}>
                  <div className="row row-cols-1 row-cols-sm-2 g-3 g-md-4 g-lg-3 g-xl-4">
                    <div className="col">
                      <div className="card h-100 bg-transparent border-0">
                        <span
                          className="position-absolute top-0 start-0 w-100 h-100 bg-white border border-white border-opacity-75 rounded-4 d-none-dark"
                          style={{ "--fn-bg-opacity": ".3" }}
                        ></span>
                        <span
                          className="position-absolute top-0 start-0 w-100 h-100 bg-white border rounded-4 d-none d-block-dark"
                          style={{ "--fn-bg-opacity": ".05" }}
                        ></span>
                        <div className="card-body position-relative z-2">
                          <div className="d-inline-flex position-relative text-info p-3">
                            <span className="position-absolute top-0 start-0 w-100 h-100 bg-white rounded-pill d-none-dark"></span>
                            <span className="position-absolute top-0 start-0 w-100 h-100 bg-body-secondary rounded-pill d-none d-block-dark"></span>
                            <i className="fi-mail position-relative z-2 fs-4 m-1"></i>
                          </div>
                          <h3 className="h6 pt-2 my-2">
                            Subscribe to your favorite listings
                          </h3>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="card h-100 bg-transparent border-0">
                        <span
                          className="position-absolute top-0 start-0 w-100 h-100 bg-white border border-white border-opacity-75 rounded-4 d-none-dark"
                          style={{ "--fn-bg-opacity": ".3" }}
                        ></span>
                        <span
                          className="position-absolute top-0 start-0 w-100 h-100 bg-white border rounded-4 d-none d-block-dark"
                          style={{ "--fn-bg-opacity": ".05" }}
                        ></span>
                        <div className="card-body position-relative z-2">
                          <div className="d-inline-flex position-relative text-info p-3">
                            <span className="position-absolute top-0 start-0 w-100 h-100 bg-white rounded-pill d-none-dark"></span>
                            <span className="position-absolute top-0 start-0 w-100 h-100 bg-body-secondary rounded-pill d-none d-block-dark"></span>
                            <i className="fi-settings position-relative z-2 fs-4 m-1"></i>
                          </div>
                          <h3 className="h6 pt-2 my-2">
                            Manage your bookings and wishlist
                          </h3>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="card h-100 bg-transparent border-0">
                        <span
                          className="position-absolute top-0 start-0 w-100 h-100 bg-white border border-white border-opacity-75 rounded-4 d-none-dark"
                          style={{ "--fn-bg-opacity": ".3" }}
                        ></span>
                        <span
                          className="position-absolute top-0 start-0 w-100 h-100 bg-white border rounded-4 d-none d-block-dark"
                          style={{ "--fn-bg-opacity": ".05" }}
                        ></span>
                        <div className="card-body position-relative z-2">
                          <div className="d-inline-flex position-relative text-info p-3">
                            <span className="position-absolute top-0 start-0 w-100 h-100 bg-white rounded-pill d-none-dark"></span>
                            <span className="position-absolute top-0 start-0 w-100 h-100 bg-body-secondary rounded-pill d-none d-block-dark"></span>
                            <i className="fi-gift position-relative z-2 fs-4 m-1"></i>
                          </div>
                          <h3 className="h6 pt-2 my-2">
                            Earn rewards for future purchases
                          </h3>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="card h-100 bg-transparent border-0">
                        <span
                          className="position-absolute top-0 start-0 w-100 h-100 bg-white border border-white border-opacity-75 rounded-4 d-none-dark"
                          style={{ "--fn-bg-opacity": ".3" }}
                        ></span>
                        <span
                          className="position-absolute top-0 start-0 w-100 h-100 bg-white border rounded-4 d-none d-block-dark"
                          style={{ "--fn-bg-opacity": ".05" }}
                        ></span>
                        <div className="card-body position-relative z-2">
                          <div className="d-inline-flex position-relative text-info p-3">
                            <span className="position-absolute top-0 start-0 w-100 h-100 bg-white rounded-pill d-none-dark"></span>
                            <span className="position-absolute top-0 start-0 w-100 h-100 bg-body-secondary rounded-pill d-none d-block-dark"></span>
                            <i className="fi-percent position-relative z-2 fs-4 m-1"></i>
                          </div>
                          <h3 className="h6 pt-2 my-2">
                            Receive exclusive offers and discounts
                          </h3>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="card h-100 bg-transparent border-0">
                        <span
                          className="position-absolute top-0 start-0 w-100 h-100 bg-white border border-white border-opacity-75 rounded-4 d-none-dark"
                          style={{ "--fn-bg-opacity": ".3" }}
                        ></span>
                        <span
                          className="position-absolute top-0 start-0 w-100 h-100 bg-white border rounded-4 d-none d-block-dark"
                          style={{ "--fn-bg-opacity": ".05" }}
                        ></span>
                        <div className="card-body position-relative z-2">
                          <div className="d-inline-flex position-relative text-info p-3">
                            <span className="position-absolute top-0 start-0 w-100 h-100 bg-white rounded-pill d-none-dark"></span>
                            <span className="position-absolute top-0 start-0 w-100 h-100 bg-body-secondary rounded-pill d-none d-block-dark"></span>
                            <i className="fi-heart position-relative z-2 fs-4 m-1"></i>
                          </div>
                          <h3 className="h6 pt-2 my-2">
                            Create multiple wishlists
                          </h3>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="card h-100 bg-transparent border-0">
                        <span
                          className="position-absolute top-0 start-0 w-100 h-100 bg-white border border-white border-opacity-75 rounded-4 d-none-dark"
                          style={{ "--fn-bg-opacity": ".3" }}
                        ></span>
                        <span
                          className="position-absolute top-0 start-0 w-100 h-100 bg-white border rounded-4 d-none d-block-dark"
                          style={{ "--fn-bg-opacity": ".05" }}
                        ></span>
                        <div className="card-body position-relative z-2">
                          <div className="d-inline-flex position-relative text-info p-3">
                            <span className="position-absolute top-0 start-0 w-100 h-100 bg-white rounded-pill d-none-dark"></span>
                            <span className="position-absolute top-0 start-0 w-100 h-100 bg-body-secondary rounded-pill d-none d-block-dark"></span>
                            <i className="fi-pie-chart position-relative z-2 fs-4 m-1"></i>
                          </div>
                          <h3 className="h6 pt-2 my-2">
                            Pay for purchases by installments
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default SignUp;
