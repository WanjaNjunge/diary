import React from "react";
import { Link } from "react-router-dom";

const Home = (props) => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fillOpacity="1" d="M0,160L48,149.3C96,139,192,117,288,117.3C384,117,480,139,576,144C672,149,768,139,864,128C960,117,1056,107,1152,117.3C1248,128,1344,160,1392,176L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
      <h1 className="display-4">Welcome to the Notes App</h1>
      <p className="lead">Take notes and stay organized</p>
      <Link to="/auth/signup" className="bn53">Get Started</Link>
    </div>
  );
};

export default Home;
