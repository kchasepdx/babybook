import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Nav from "..//Nav.jsx";
import fire, { db } from "../fire.js";
import getDayFunction from "../getDayFunction";
import getMonthFunction from "../getMonthFunction";
import Footer from "../Footer";
// images
import Onesie from "../Images/onesie.png";
import Cake from "../Images/birthday-cake.png";
import Scale from "../Images/weighing-machine.png";
import Music from "../Images/music.png";

function Book() {
  const user = fire.auth().currentUser;
  const [babyName, setBabyName] = useState();
  const [birthWeight, setBirthWeight] = useState("");
  const [takeHomeOutfit, setTakeHomeOutfit] = useState("");
  const [birthStory, setBirthStory] = useState("");
  const [babyBDay, setBabyBDay] = useState();
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [date, setDate] = useState("");
  const [year, setYear] = useState("");
  const [favSongs, setFavSongs] = useState("");

  // Put DB Data in State
  useEffect(async () => {
    if (user != null) {
      var uid = user.uid;
    }
    var docRef = db.collection("Users").doc(uid);
    docRef

      .get()
      .then((doc) => {
        if (doc.exists) {
          let userInfo = doc.data();
          console.log(userInfo);
          setBirthWeight(userInfo.birth_weight.birthWeight);
          setTakeHomeOutfit(userInfo.take_home_outfit.takeHomeOutfit);
          setBirthStory(userInfo.birth_story.birthStory);
          setBabyName(userInfo.baby_name.babyName);
          setBabyBDay(userInfo.date_of_birth.babyBDay);
          setFavSongs(userInfo.fav_songs.favSongs);
          // birth date
          var birthDate = new Date(userInfo.date_of_birth.babyBDay + " 05:");
          setDate(birthDate.getDate());
          setYear(birthDate.getFullYear());
          setDay(getDayFunction(birthDate));
          setMonth(getMonthFunction(birthDate));
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
        }
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
  }, []);

  return (
    <div className="Book">
      <Nav />
      <container id="book-container" />
      <h1 id="baby-name"> Baby {babyName} </h1>
      <button id="book-button-edit">
        <Link className="book-link-1" to="/questionnaire">
          <i className="fas fa-edit"></i>Edit
        </Link>
      </button>

      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-interval="false"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="4"
            aria-label="Slide 5"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="container content-container">
              <div className="row bk-row">
                <div className="col">
                  <img id="onesie-book" src={Cake} alt="cartoon cake" />
                </div>
                {babyBDay && (
                  <div class="col">
                    <h3 className="entries">{day},</h3>
                    <h3 className="entries">
                      {month} {date},{year}
                    </h3>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="container content-container">
              <div className="row bk-row">
                <div className="col">
                  <img id="onesie-book" src={Scale} alt="cartoon scale" />
                </div>
                <div className="col">
                  <h3 className="entries">{birthWeight}</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="container content-container">
              <div className="row bk-row">
                <div className="col">
                  <h3 className="book-label">
                    Take<br></br> Home <br></br> Outfit
                  </h3>
                  <img id="onesie-book" src={Onesie} alt="cartoon onesie" />
                </div>
                <div className="col">
                  <h3 className="entries">{takeHomeOutfit}</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="container content-container">
              <div className="row bk-row">
                <div className="col">
                  <h3 className="book-label">Favorite Songs</h3>
                  <img id="music-note" src={Music} alt="music note" />
                </div>
                <div className="col">
                  <h3 className="entries">{favSongs}</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="container content-container">
              <div className="row bk-row">
                <div className="col">
                  <h3 className="entries">Birth Story:</h3>
                </div>
                <div className="col">
                  <h3 className="birth-story">{birthStory}</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <Footer />
    </div>
  );
}

export default Book;
