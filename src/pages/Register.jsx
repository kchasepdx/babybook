import React, { useState, useRef } from "react";
import { useAuth } from "/Users/kristenchase/baby-book/src/contexts/AuthContext.js";
import { Link, useHistory } from "react-router-dom";

// images
import Onesie from "../Images/onesie.png";
import Pacifier from "../Images/pacifier.png";
import TeddyBear from "../Images/teddy-bear.png";
import RubberDuck from "../Images/rubber-duck.png";

function Register() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }

    try {
      setError("");
      setLoading(true);
      debugger;
      await signup(emailRef.current.value, passwordRef.current.value);
      history.push("/profile");
    } catch {
      setError("Failed to create an account");
    }
    setLoading(false);
  }

  return (
    <div className="Register container-fluid">
      <img
        id="onesie"
        className="reg-images"
        src={Onesie}
        alt="cartoon onesie"
      />
      <img
        id="pacifier"
        className="reg-images"
        src={Pacifier}
        alt="cartoon pacifier"
      />
      <img
        id="teddy-bear"
        className="reg-images"
        src={TeddyBear}
        alt="cartoon teddy bear"
      />
      <img
        id="rubber-duck"
        className="reg-images"
        src={RubberDuck}
        alt="cartoon rubber duck"
      />
      <h1 className="register-header"> New Account?</h1>
      {error && (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      )}
      <form onSubmit={handleSubmit} className="registration-box">
        <div className="form-group" id="reg-form-div">
          <div className="form-group-row ">
            <input
              type="text"
              name="email"
              placeholder="email address"
              autoFocus
              ref={emailRef}
              className="register-input form-control"
              required
            />
          </div>
          <br></br>
          <div className="form-group-row">
            <input
              type="password"
              name="password"
              placeholder="password"
              required
              ref={passwordRef}
              className="register-input form-control"
            />
            <br></br>
          </div>
          <div className="form-group-row">
            <input
              type="password"
              name="passwordConfirm"
              placeholder="confirm password"
              required
              ref={passwordConfirmRef}
              className="register-input form-control"
            />
            <br></br>
          </div>
          <button
            disabled={loading}
            className="register-button"
            type="submit"
            value="Register"
          >
            {" "}
            Sign Up{" "}
          </button>
          <button id="register-link-reg">
            <Link to="/">Already have an account?</Link>
          </button>
        </div>
      </form>
    </div>
  );
}

export default Register;
