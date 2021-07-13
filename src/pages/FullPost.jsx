import React, { useState, useEffect } from "react";
import fire, { db } from "../fire";
import Comment from "../Comment";
import Nav from "../Nav";

function FullPost(props) {
  const [commentBox, setCommentBox] = useState(false);
  const [comment, setComment] = useState("");
  const id = props.match.params.id;
  const [post, setPost] = useState("");
  const [commentArr, addComment] = useState([{}]);
  const [refetch, setRefetch] = useState("false");
  const [commentsLoaded, setCommentsLoaded] = useState(false);
  const user = fire.auth().currentUser;

  // match.params.id

  //   Toggle comment input
  function handleComment() {
    setCommentBox(!commentBox);
  }
  // get comment from input
  function createComment(event) {
    setComment(event.target.value);
  }

  // Retrieve Post from Firebase
  useEffect(async () => {
    var docRef = db.collection("Posts").doc(id);
    await docRef
      .get()
      .then((doc) => {
        if (doc.exists) {
          console.log("Document data:", doc.data());
          setPost({
            title: doc.data().post.post.Title,
            content: doc.data().post.post.Content,
            userName: doc.data().post.post.userName,
          });
        } else {
          console.log("No such document!");
        }
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
  }, []);

  // Create Comment specific to Post
  function handleSubmit(event) {
    let timestamp = Date.now();
    db.collection("Comments" + id)
      .doc()
      .set({
        comment: comment,
        timestamp: timestamp,
        userName: user.displayName,
      })
      .then(() => {
        console.log("Document successfully written!");
        setCommentBox(!commentBox);
        setRefetch(!refetch);
      })
      .catch((error) => {
        console.error("Error writing document: ", error);
      });
  }

  //Retrieve Comments from Firebase
  useEffect(async () => {
    var tempCommentArr = [];
    var docRef = db.collection("Comments" + id);
    await docRef.get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        var entry = doc.data();
        tempCommentArr.push(entry);
      });
      tempCommentArr.sort(function (a, b) {
        return a.timestamp - b.timestamp;
      });
      addComment(tempCommentArr);
      setCommentsLoaded(true);
    });
  }, [refetch]);

  return (
    <div>
      <Nav />
      <div className="full-card">
        <div className="card-body full-card-body">
          <h5 className="full-card-title">{post.title}</h5>
          <h4 className="full-post-username">{post.displayName}</h4>
          <p className="card-text full-card-text">{post.content}</p>
          <button
            onClick={() => {
              handleComment();
            }}
            href="#"
            className="btn btn-primary card-button full-text-btn"
          >
            {commentBox === true ? (
              "Cancel"
            ) : (
              <i class="far fa-comments"> Comment</i>
            )}
          </button>
          {commentBox === true && (
            <div>
              <input
                placeholder="Add your comment..."
                type="email"
                className="form-control comment-input"
                onChange={createComment}
              />
              <button
                onClick={handleSubmit}
                className="btn submit-comment-btn"
                type="button"
              >
                Submit
              </button>
            </div>
          )}
          {/* comments */}
          <div>
            {commentsLoaded &&
              commentArr.map((x, index) => (
                <Comment
                  key={index}
                  id={index}
                  content={x.comment}
                  user={x.userName}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FullPost;
