import React, { useState } from "react";
import Nav from "../Nav";
import { useHistory } from "react-router";
import fire, { db } from "../fire";

function Post(props) {
  const [post, createPost] = useState({
    Title: "",
    Content: "",
    userName: "",
  });
  const history = useHistory();
  const user = fire.auth().currentUser;

  function getPost(event) {
    let postValue = event.target.value;
    let inputName = event.target.name;
    let userName = user.displayName;

    createPost((prevValue) => {
      if (inputName === "title") {
        return {
          Title: postValue,
          Content: prevValue.Content,
          userName: userName,
        };
      } else {
        return {
          Title: prevValue.Title,
          Content: postValue,
          userName: userName,
        };
      }
    });
  }
  function handleClick(event) {
    createPost({ Title: "", Content: "" });

    event.preventDefault();
    db.collection("Posts")
      .doc()
      .set({
        post: { post },
      })
      .then(() => {
        console.log("Document successfully written!");
        history.push("/community");
      })
      .catch((error) => {
        console.error("Error writing document: ", error);
      });

    history.push("/community");
  }

  return (
    <div>
      <Nav />

      <div className="container-fluid" id="post-container">
        <h1 id="post-header"> Community Post</h1>
        <label id="post-label">What do you want to share?</label>
        <input
          id="post-title"
          value={post.Title}
          onChange={getPost}
          name="title"
          placeholder="Enter Title..."
          className="form-control"
        />
        <textarea
          id="user-post"
          name="content"
          rows="10"
          cols="50"
          onChange={getPost}
          placeholder="Tell your story..."
          className="form-control"
        ></textarea>
        <button type="button" onClick={handleClick} id="post-button">
          Share
        </button>
      </div>
    </div>
  );
}

export default Post;
