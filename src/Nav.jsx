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
      history.push("/");
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
            <a
              className="navbar-brand current-nav"
              href={process.env.PUBLIC_URL + "/community"}
            >
              Community
            </a>
          ) : (
            <a
              className="navbar-brand "
              href={process.env.PUBLIC_URL + "/community"}
            >
              Community
            </a>
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
                <a class="drop-brand drop-main" href="/book">
                  View Book
                </a>
                <a class="drop-brand drop-main" href="/questionnaire">
                  Edit
                </a>
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
            <a className="dropdown-item" href="/profile">
              Home
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="/book">
              My Book
            </a>
          </li>

          <li>
            <a className="dropdown-item" href="/community">
              Community
            </a>
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
