import React, { useState } from "react";
import Baby from "../Images/baby-boy.png";
import Nav from "../Nav";
import { Link } from "react-router-dom";
import fire, { db } from "../fire";
import Footer from "../Footer";
import GetNumMonths from "../GetNumMonths";

function Profile() {
  const [error, setError] = useState("");
  const user = fire.auth().currentUser;
  const [babyName, setBabyName] = useState("");
  const [babyBDay, setBabyBDay] = useState("");
  const [photoURL, setPhotoURL] = useState("");

  var uid;

  if (user != null) {
    uid = user.uid;
  }

  var docRef = db.collection("Users").doc(uid);

  docRef
    .get()
    .then((doc) => {
      if (doc.exists) {
        let userInfo = doc.data();
        setBabyName(userInfo.baby_name.babyName);
        setBabyBDay(userInfo.date_of_birth.babyBDay);
        setPhotoURL(user.photoURL);
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    })
    .catch((error) => {
      console.log("Error getting document:", error);
    });

  var numOfMonths = GetNumMonths(babyBDay);
  var birthday = new Date(babyBDay + " 00:");
  var today = new Date();
  var numOfYears = today.getFullYear() - birthday.getFullYear();
  console.log(birthday);
  console.log(numOfMonths);
  console.log(typeof numOfMonths);

  return (
    <div>
      <Nav />
      {error && <small>{error}</small>}
      <div className="container-fluid">
        <div className="profile-container">
          {babyName === "" ? (
            <h1 className="h1 profile-header">Welcome!</h1>
          ) : typeof numOfMonths !== "number" ? (
            <h1 className="h1 profile-header">Welcome!</h1>
          ) : numOfMonths >= 24 ? (
            <h1 className="h1 profile-header">
              {babyName} is {numOfYears} years old!
            </h1>
          ) : (
            <h1 className="h1 profile-header">
              {babyName} is{" "}
              <span style={{ color: "#c1a1d3" }}>{numOfMonths} months</span>{" "}
              old!
            </h1>
          )}

          <img
            className="baby img-fluid"
            src={photoURL ? photoURL : Baby}
            alt="cartoon baby"
          />
          <div className="view-book">
            <Link to="/book">
              <button className="prof-btn" id="book-button">
                <h2>View My Book</h2>
              </button>
            </Link>
          </div>
          <div className="update-book">
            <Link to="/questionnaire">
              <button className="prof-btn" id="update-button">
                <h2>Update My Book</h2>
              </button>
            </Link>
          </div>
          <div className="community">
            <Link to="/community">
              <button className="prof-btn" id="comm-button">
                <h2>Community</h2>
              </button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Profile;
