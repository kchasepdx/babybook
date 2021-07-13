import React, { useState, useRef } from "react";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import Footer from "../Footer";
import Cloud from "../Images/Cloud.png";
import Book from "../Images/open-book.png";

function Landing() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      history.push("/profile");
    } catch {
      setError("Failed to log in");
    }
    setLoading(false);
  }

  return (
    // LOGIN AREA
    <div id="landing">
      {error && (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <div className="mb-3 d-inline-flex p-2">
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            required
            ref={emailRef}
            name="email"
            placeholder="EMAIL"
          />
        </div>

        <div className="mb-3 d-inline-flex p-2">
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            ref={passwordRef}
            required
            name="password"
            placeholder="PASSWORD"
          />
        </div>
        <button id="login-button" type="submit" className="btn btn-primary">
          <i className="fas fa-sign-in-alt"></i>
        </button>
      </form>
      {/* Landing Page */}
      <img src={Cloud} alt="cloud" id="cloud" />
      <h1 className="landing-header container-fluid">Virtual Baby Book</h1>{" "}
      <button id="register-link" className="container-fluid">
        <Link to="/babybook/register">Register Now</Link>
      </button>
      <img src={Book} alt="book image" id="book-img" />
      <div id="rainbow-div"></div>
      <Footer />
    </div>
  );
}

export default Landing;
