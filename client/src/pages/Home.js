import React from "react";

const Home = (props) => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100">
      <h1 className="display-4">Welcome to the Notes App</h1>
      <p className="lead">Take notes and stay organized</p>
      <button className="btn btn-primary btn-lg">Get Started</button>
    </div>
  );
};

export default Home;
