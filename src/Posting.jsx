import React, { useState } from "react";
import { Link } from "react-router-dom";

function Posting(props) {
  const [active, setActive] = useState("");
  const length = props.content.length;
  // const user = fire.auth().currentUser;
  // var uid;

  // if (user != null) {
  //   uid = user.uid;
  // }

  function handleFullView(id, e) {
    e.preventDefault();
    if (active === id) {
      setActive("");
    } else {
      setActive(id);
    }
  }

  return (
    <div className="col-sm-6">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <h4 className="card-subtitle user-name-comment ">{props.user}</h4>
          {active === props.id ? (
            <p className="card-text">{props.content}</p>
          ) : (
            <p className="card-text text-overflow">{props.content}</p>
          )}
          {/* LINK TO NEW PATH */}
          <Link to={`/post/${props.id}`}>
            <button className="btn btn-primary card-button ">
              View Full Post
            </button>
          </Link>
          {length > 115 ? (
            <a
              onClick={(e) => {
                handleFullView(props.id, e);
              }}
              href="#"
              className="btn btn-full-post"
            >
              {active === props.id ? (
                <i className="fas fa-angle-double-up"></i>
              ) : (
                <i className="fas fa-angle-double-down"></i>
              )}
            </a>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default Posting;
