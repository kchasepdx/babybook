import React, { useState, useEffect } from "react";
import Nav from "../Nav";
import fire, { db } from "../fire";
import { useHistory } from "react-router";

function Questionnaire() {
  const [babyName, setBabyName] = useState("");
  const [babyBDay, setBabyBDay] = useState("");
  const [birthWeight, setBirthWeight] = useState("");
  const [takeHomeOutfit, setTakeHomeOutfit] = useState("");
  const [birthStory, setBirthStory] = useState("");
  const [favSongs, setFavSongs] = useState("");
  const [userName, setUserName] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const user = fire.auth().currentUser;
  let uid;
  const history = useHistory();
  let displayName = user.displayName;

  if (user != null) {
    uid = user.uid;
  }
  useEffect(() => {
    if (user != null) {
      uid = user.uid;
    }
    var docRef = db.collection("Users").doc(uid);
    docRef
      .get()
      .then((doc) => {
        if (doc.exists) {
          let userInfo = doc.data();
          setBabyName(userInfo.baby_name.babyName || "");
          setBabyBDay(userInfo.date_of_birth.babyBDay || "");
          setBirthWeight(userInfo.birth_weight.birthWeight || "");
          setTakeHomeOutfit(userInfo.take_home_outfit.takeHomeOutfit || "");
          setBirthStory(userInfo.birth_story.birthStory || "");
          setFavSongs(userInfo.fav_songs.favSongs || "");
          setUserName(user.displayName || "");
          setPhotoURL(user.photoURL || "");
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
          console.log(uid);
          console.log(displayName);
        }
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
  }, []);

  // Answer Update Questions

  function updateName(event) {
    setBabyName(event.target.value);
  }
  function updateBDay(event) {
    setBabyBDay(event.target.value);
  }

  function updateBirthWeight(event) {
    setBirthWeight(event.target.value);
  }

  function updateOutfit(event) {
    setTakeHomeOutfit(event.target.value);
  }

  function updateBirthStory(event) {
    setBirthStory(event.target.value);
  }

  function updateFavSongs(event) {
    setFavSongs(event.target.value);
  }

  function updateUserName(event) {
    setUserName(event.target.value);
  }

  function updatePhotoURL(event) {
    setPhotoURL(event.target.value);
  }

  function cancel() {
    history.push("/profile");
  }

  function addUser(event) {
    event.preventDefault();

    const user = fire.auth().currentUser;
    user
      .updateProfile({
        displayName: userName,
        photoURL: photoURL,
      })
      .then(() => {
        console.log("Name and Photo set!");
        console.log(user.userName);
      })
      .catch((error) => {
        console.log(error);
      });

    db.collection("Users")
      .doc(uid)
      .set({
        baby_name: { babyName },
        date_of_birth: { babyBDay },
        birth_weight: { birthWeight },
        take_home_outfit: { takeHomeOutfit },
        birth_story: { birthStory },
        fav_songs: { favSongs },
      })
      .then(() => {
        console.log("Document successfully written!");
        history.push("/profile");
      })
      .catch((error) => {
        console.error("Error writing document: ", error);
      });
  }

  return (
    <div className="Questionnaire">
      <Nav />
      <div className="white-box-quest">
        <h1 id="quest-header"> Questionnaire</h1>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">
            User Name
          </span>
          <input
            type="text"
            className="form-control answer-box"
            aria-label="Username"
            aria-describedby="basic-addon1"
            onChange={updateUserName}
            name="userpost"
            rows="1"
            cols="100"
            value={userName}
            placeholder="User Name"
          />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">
            Photo URL
          </span>
          <input
            type="text"
            className="form-control answer-box"
            aria-label="Photo"
            aria-describedby="basic-addon1"
            onChange={updatePhotoURL}
            name="userpost"
            rows="1"
            cols="100"
            value={photoURL}
            placeholder={photoURL}
          />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">
            Baby's Name
          </span>
          <input
            type="text"
            className="form-control answer-box"
            aria-label="Username"
            aria-describedby="basic-addon1"
            onChange={updateName}
            name="userpost"
            rows="1"
            cols="100"
            value={babyName}
            placeholder={babyName}
            id="setBabyName"
          />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">
            Date of Birth
          </span>
          <input
            className="form-control answer-box"
            aria-label="Username"
            aria-describedby="basic-addon1"
            value={babyBDay}
            onChange={updateBDay}
            type="date"
            id="setBabyBDay"
          />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">
            Birth Weight:
          </span>
          <input
            type="text"
            className="form-control answer-box"
            aria-label="Username"
            aria-describedby="basic-addon1"
            value={birthWeight}
            onChange={updateBirthWeight}
            placeholder={birthWeight}
          />
        </div>

        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">
            Take Home Outfit:
          </span>
          <input
            type="text"
            className="form-control answer-box"
            aria-label="Username"
            aria-describedby="basic-addon1"
            value={takeHomeOutfit}
            onChange={updateOutfit}
            placeholder={takeHomeOutfit}
          />
        </div>

        <div className="input-group">
          <span className="input-group-text">Birth Story:</span>
          <textarea
            className="form-control answer-box "
            aria-label="With textarea"
            value={birthStory}
            onChange={updateBirthStory}
            placeholder={birthStory}
            rows="8"
          ></textarea>
        </div>

        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">
            Favorite Songs
          </span>
          <input
            type="text"
            className="form-control answer-box"
            aria-label="Username"
            aria-describedby="basic-addon1"
            onChange={updateFavSongs}
            name="userpost"
            rows="1"
            cols="100"
            value={favSongs}
            placeholder={favSongs}
          />
        </div>

        <br></br>
        <button
          className="btn"
          type="button"
          onClick={addUser}
          id="save-button"
        >
          <i class="fas fa-save"></i>
        </button>
        <button className="btn" id="cancel-button" onClick={cancel}>
          <i class="fas fa-window-close"></i>
        </button>
      </div>
    </div>
  );
}

export default Questionnaire;
