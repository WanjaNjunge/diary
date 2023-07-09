import React from "react";
import { Link } from "react-router-dom";

const Home = (props) => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100">
      <h1 className="display-4">Welcome to the Notes App</h1>
      <p className="lead">Take notes and stay organized</p>
      <Link to="/auth/signup" className="bn53">Get Started</Link>
    </div>
  );
};

export default Home;
