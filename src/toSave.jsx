import React, { useEffect, useState } from "react";
import Nav from "/Users/kristenchase/baby-book/src/Nav.jsx";
import fire, { auth } from "/Users/kristenchase/baby-book/src/fire.js";
import { Redirect } from "react-router";
import useAuth from "/Users/kristenchase/baby-book/src/contexts/AuthContext.js";

// images
import Onesie from "/Users/kristenchase/baby-book/src/onesie.png";
import Pacifier from "/Users/kristenchase/baby-book/src/pacifier.png";
import TeddyBear from "/Users/kristenchase/baby-book/src/teddy-bear.png";
import RubberDuck from "/Users/kristenchase/baby-book/src/rubber-duck.png";

function Register() {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [hasAccount, setHasAccount] = useState(false);

  const clearInputs = () => {
    setEmail("");
    setPassword("");
  };

  const clearErrors = () => {
    setEmailError("");
    setPasswordError("");
  };

  const handleLogin = () => {
    clearErrors();
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/email-already-in-use":
          case "auth/invalid-email":
            setEmailError(err.message);
            break;
          case "auth/weak-password":
            setPasswordError(err.message);
            break;
        }
      });
  };

  const handleLogOut = () => {
    fire.auth().signOut();
  };

  const authListener = () => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        clearInputs();
        setUser(user);
      } else {
        setUser("");
      }
    });
  };

  useEffect(() => {
    authListener();
  }, []);

  const handleSignUp = () => {
    clearErrors();
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailError(err.message);
            break;
          case "auth/wrong-password":
            setPasswordError(err.message);
            break;
        }
        Redirect("/profile");
      });
  };

  return (
    <div className="Register">
      <Nav />
      <img className="Onesie" src={Onesie} />
      <img className="Pacifier" src={Pacifier} />
      <img className="TeddyBear" src={TeddyBear} />
      <img className="RubberDuck" src={RubberDuck} />
      <h1 className="RegisterHeader"> New Account?</h1>
      <form className="RegistrationBox">
        <label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            name="username"
            placeholder="username"
            autoFocus
            value={email}
            className="registerInput"
            // className={`registerInput ${
            //   userNameResult === true ? "Input-green" : ""
            // }`}
            required
          />
          <p className="errorMsg">{emailError}</p>
        </label>
        <br></br>
        <label>
          <input
            type="password"
            name="password"
            placeholder="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="registerInput"
          />
          <p className="errorMsg">{passwordError}</p>
          <br></br>
        </label>
        <button
          onClick={handleSignUp}
          className="registerButton"
          type="button"
          value="Register"
        >
          {" "}
          Sign Up{" "}
        </button>
      </form>
    </div>
  );
}

export default Register;


import React, { useState } from "react";
import { Link } from "react-router-dom";
import Nav from "/Users/kristenchase/baby-book/src/Nav.jsx";

function Landing() {
  const [userNameResult, setUserNameResult] = useState("");
  const [passwordResult, setPasswordResult] = useState("");
  const [userName, createUserName] = useState("");
  const [password, createPassword] = useState("");

  function handleChangeUN(event) {
    const inputValue = event.target.value;
    createUserName(inputValue);
    console.log("input val = " + inputValue);
    console.log("username is " + userName);
  }

  function handleChangePW(event) {
    const inputValue2 = event.target.value;
    createPassword(inputValue2);
  }

  function handleClick() {
    if (userNameResult === false || passwordResult === false) {
      alert("UserName and Password must follow all guidelines.");
    } else if (userNameResult === true && passwordResult === true) {
      console.log("userName created");
    } else {
      console.log("problem");
    }
  }

  return (
    <div>
      <form className="LogIn">
        <label>
          <input
            onChange={handleChangeUN}
            type="text"
            name="username"
            placeholder="username"
            required
            className="LogInInput"
          />
        </label>
        <label>
          <input
            onChange={handleChangePW}
            type="password"
            name="password"
            placeholder="password"
            required
            className="LogInInput"
          />
        </label>
        <input className="LogInButton" type="submit" value=">>" />
      </form>
      <Nav />
      <h1 className="LandingHeader"> Start your virtual baby book today.</h1>
      <button id="registerLink">
        <Link to="/register">Register Now</Link>
      </button>
      <div id="rainbow"></div>
    </div>
  );
}

export default Landing;

// rainbox

/* #rainbow {
  position: relative;
  height: 56vw;
  overflow: hidden;
  background: transparent;
  transform: translate(-50vw, -16.666vw);
  top: 8vw;
  left: 50vw;
  z-index: 1;
  bottom: 0px;
} */

/* #rainbow::after {
  position: absolute;
  z-index: 1;
  content: "";
  width: 50%;
  height: 100%;
  top: 700px;
  bottom: -000px;
  left: 25vw;
  border-radius: 90%;
  box-shadow: 0 0 0 8vw #b6c9f0, 0 0 0 15vw #ffc996, 0 0 0 25vw #5bc6e8,
    0 0 0 40vw #ff8474;
} */
