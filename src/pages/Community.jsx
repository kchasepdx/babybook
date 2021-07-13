import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Nav from "/Users/kristenchase/baby-book/src/Nav.jsx";
import Conversation from "../Images/conversation.png";
import Footer from "../Footer";
import { db } from "../fire";
import Posting from "../Posting";

function Community() {
  const [allPosts, addPosts] = useState(null);
  var postArr = [];
  const [read, setRead] = useState("");

  // Retrieve Posts from FireBase and create Post Array
  useEffect(async () => {
    var docRef = db.collection("Posts");
    await docRef.get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        var entry = { id: doc.id, data: doc.data() };
        postArr.push(entry);
      });
      addPosts(postArr);
      console.log(postArr);
    });
  }, []);

  // View Full Text of the Post
  function handleFullView(key, e) {
    if (read === key) {
      setRead("");
    } else {
      setRead(key);
    }
  }

  return (
    <div className="Community container-fluid">
      <Nav />
      <div>
        <h1 id="community-header">
          <img
            id="conversation"
            src={Conversation}
            alt="two cartoon people chatting"
          />
          Community
        </h1>
        <p id="community-tagline">Share Your Highs and Lows</p>
        <p id="post-add">
          <Link to="/babybook/post">
            <i class="far fa-edit"></i>
          </Link>
        </p>
        <div className="row posts">
          {allPosts &&
            allPosts.map((content, index) => (
              <Posting
                key={index}
                id={allPosts[index].id}
                title={content.data.post.post.Title}
                content={content.data.post.post.Content}
                user={content.data.post.post.userName}
                handleComment={handleFullView}
              />
            ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Community;
