import React from "react";
import { Link } from "react-router-dom";
import { useAppState } from "../AppState";

const Nav = (props) => {
  const { state, dispatch } = useAppState();

  return (
    <header className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="navbar-left">
        <h1 className="navbar-brand">MY NOTES</h1>
      </div>
      <nav className="navbar-right">
        {!state.token ? (
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/auth/signup" className="nav-link">
                Signup
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/auth/login" className="nav-link">
                Login
              </Link>
            </li>
          </ul>
        ) : null}
        {state.token ? (
          <button
            className="btn btn-link"
            onClick={() => {
              dispatch({ type: "logout" });
              props.history.push("/");
            }}
          >
            Logout
          </button>
        ) : null}
      </nav>
    </header>
  );
};

export default Nav;
