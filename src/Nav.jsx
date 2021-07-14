import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useAuth } from "../src/contexts/AuthContext";
import fire from "/Users/kristenchase/baby-book/src/fire.js";
import { Link } from "react-router-dom";

function Nav(props) {
  const history = useHistory();
  const { logout } = useAuth();
  const [error, setError] = useState("");
  const [curPage, setCurPage] = useState("");
  const [dropDown, toggleDropDown] = useState(false);
  const user = fire.auth().currentUser;
  const userName = user.displayName;

  async function handleLogout() {
    setError("");

    try {
      setError("");
      await logout();
      history.push("/babybook");
    } catch {
      setError("failed to log out");
    }
  }

  function toggle() {
    toggleDropDown(!dropDown);
  }

  useEffect(() => {
    setCurPage(document.URL.substr(document.URL.lastIndexOf("/")));
  }, []);

  return (
    <div className="container-fluid">
      <nav id="full-navbar" className="navbar fixed-top">
        <div className={`container-fluid ${userName && "nav-with-user"}`}>
          {curPage === "/profile" ? (
            <Link to="/profile">
              <a className="current-nav navbar-brand">Home</a>
            </Link>
          ) : (
            <Link to="/profile">
              <a className="navbar-brand">Home</a>{" "}
            </Link>
          )}
          {curPage === "/community" ? (
            <Link to="/community">
              <a className="navbar-brand current-nav">Community</a>
            </Link>
          ) : (
            <Link to="/community">
              <a className="navbar-brand ">Community</a>
            </Link>
          )}

          <li class="nav-item dropdown">
            {curPage === "/book" ? (
              <a
                class="nav-link dropdown-toggle current-nav"
                id="navbarDropdown"
                role="button"
                dataToggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                onClick={toggle}
              >
                My Book
              </a>
            ) : (
              <a
                class="nav-link dropdown-toggle navbar-brand"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                onClick={toggle}
              >
                My Book
              </a>
            )}
            {dropDown && (
              <div
                id="dropdown-main-menu"
                className="dropdown-menu"
                aria-labelledby="navbarDropdown"
              >
                <Link to="/book">
                  <a class="drop-brand drop-main">View Book</a>
                </Link>
                <Link to="/questionnaire">
                  <a class="drop-brand drop-main">Edit</a>
                </Link>
              </div>
            )}
          </li>
          <a onClick={handleLogout} className="navbar-brand user-name-nav">
            {userName && <span style={{ color: "#b3e988" }}>{userName}</span>}{" "}
            Logout
          </a>
        </div>
      </nav>

      {/* Responsive Collapse Nav Bar */}
      <div className="dropdown navbar-phone">
        <button
          className="btn btn-secondary dropdown-toggle dropdown-toggle-split menu-btn"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <i class="fas fa-bars"></i>
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li>
            <Link to="/profile">
              <a className="dropdown-item">Home</a>
            </Link>
          </li>
          <li>
            <Link to="/book">
              <a className="dropdown-item">My Book</a>
            </Link>
          </li>

          <li>
            <Link to="/community">
              <a className="dropdown-item">Community</a>
            </Link>
          </li>
          <li>
            <a className="dropdown-item" onClick={handleLogout}>
              Logout
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Nav;
