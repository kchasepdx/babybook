import React, { useState } from "react";

function Comment(props) {
  const [enlarge, setEnlarge] = useState("");
  const length = props.content.length;

  function handleFullView(id, e) {
    e.preventDefault();
    if (enlarge === id) {
      setEnlarge("");
    } else {
      setEnlarge(id);
    }
  }

  return (
    <div className="col-sm-6">
      <div className="card comments">
        <div className="card-title">
          <p className="user-name-comment">
            <span style={{ color: "#5bc6e8" }}>{props.user}</span> says...
          </p>
        </div>
        <div className="card-body ">
          {enlarge === props.id ? (
            <p className="card-text">{props.content}</p>
          ) : (
            <p className="card-text text-overflow">{props.content}</p>
          )}
          {length >= 115 ? (
            <button
              onClick={(e) => {
                handleFullView(props.id, e);
              }}
              className="cmt-xpnd btn btn-full-post"
              href="#"
            >
              {enlarge === props.id ? (
                <i className="fas fa-angle-double-up"></i>
              ) : (
                <i className="fas fa-angle-double-down"></i>
              )}
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default Comment;
