import { useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const API_URL = import.meta.env.VITE_SERVER_ORIGIN;
import { AuthContext } from "../context/AuthContext.jsx";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const {setUserData} = useContext(AuthContext);

    const handleSubmit = async (e)=>{
        e.preventDefault();

        if(!email || !password){
            alert('Set all fields');
        }
        // console.log({email, password});

        try {
           // API call
        const response = await axios.post(`${API_URL}/api/login`, {email, password}); 

        if(response.status === 200 || response.status === 201){
            // console.log(response);
            // console.log(response.data.User);
            setUserData(response.data.User);

            // console.log(response.User);
            console.log("logged In Successfully");
            navigate('/dashboard');
        }
        } catch (error) {
            alert(`Logged In SuccessFully: ${error}`);
            console.error(error.response?.data?.msg || 'Something Went Wrong');
        }
    }

    return (
    <main
      className="content-wrapper w-100 px-3 ps-lg-5 pe-lg-4 mx-auto"
      style={{ maxWidth: "1920px" }}
    >
      <div className="d-lg-flex">
        {/* Login form + Footer */}
        <div
          className="d-flex flex-column min-vh-100 w-100 py-4 mx-auto me-lg-5"
          style={{ maxWidth: "416px" }}
        >
          {/* Logo */}
          <header className="navbar px-0 pb-4 mt-n2 mt-sm-0 mb-2 mb-md-3 mb-lg-4">
            <a className="navbar-brand pt-0" href="index.html">
              <span className="d-flex flex-shrink-0 text-primary rtl-flip me-2">
                {/* SVG */}
                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="34">
                  <path
                    d="M34.5 16.894v10.731c0 3.506-2.869 6.375-6.375 6.375H17.5h-.85C7.725 33.575.5 26.138.5 17c0-9.35 7.65-17 17-17s17 7.544 17 16.894z"
                    fill="currentColor"
                  />
                  {/* (SVG inner paths remain unchanged) */}
                </svg>
              </span>
              Finder
            </a>
          </header>

          <h1 className="h2 mt-auto">Welcome back</h1>
          <div className="nav fs-sm mb-4">
            Don't have an account?
            <a
              className="nav-link text-decoration-underline p-0 ms-2"
              href="account-signup.html"
            >
              Create an account
            </a>
          </div>

          {/* Form */}
          <form className="needs-validation" onSubmit={handleSubmit} noValidate>
            <div className="position-relative mb-4">
              <input
                type="email"
                className="form-control form-control-lg"
                placeholder="Email"
                value={email}
                onChange={(e)=> setEmail(e.target.value)}
                required
              />
              <div className="invalid-tooltip bg-transparent py-0">
                Enter a valid email address!
              </div>
            </div>
            <div className="mb-4">
              <div className="password-toggle">
                <input
                  type="password"
                  className="form-control form-control-lg"
                  placeholder="Password"
                  value={password}
                  onChange={(e)=> setPassword(e.target.value)}
                  required
                />
                <div className="invalid-tooltip bg-transparent py-0">
                  Password is incorrect!
                </div>
                <label
                  className="password-toggle-button fs-lg"
                  aria-label="Show/hide password"
                >
                  <input type="checkbox" className="btn-check" />
                </label>
              </div>
            </div>
            <div className="d-flex align-items-center justify-content-between mb-4">
              <div className="form-check me-2">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="remember-30"
                />
                <label htmlFor="remember-30" className="form-check-label">
                  Remember for 30 days
                </label>
              </div>
              <div className="nav">
                <a
                  className="nav-link animate-underline p-0"
                  href="account-password-recovery.html"
                >
                  <span className="animate-target">Forgot password?</span>
                </a>
              </div>
            </div>
            <button type="submit" className="btn btn-lg btn-primary w-100">
              Sign In
            </button>
          </form>

          {/* Divider */}
          <div className="d-flex align-items-center my-4">
            <hr className="w-100 m-0" />
            <span className="text-body-emphasis fw-medium text-nowrap mx-4">
              or continue with
            </span>
            <hr className="w-100 m-0" />
          </div>

          {/* Social login */}
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

          {/* Footer */}
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

        {/* Cover image (desktop only) */}
        <div
          className="d-none d-lg-block w-100 py-4 ms-auto"
          style={{ maxWidth: "1034px" }}
        >
          <div className="d-flex flex-column justify-content-end h-100 bg-info-subtle rounded-5">
            <div
              className="ratio"
              style={{ "--fn-aspect-ratio": "calc(1030 / 1032 * 100%)" }}
            >
              <img src="../assets/img/account/account-cover.png" alt="Girl" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;
