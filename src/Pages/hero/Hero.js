import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-info">
        <h3>Learn Programming for free </h3>
        <p>
          Learn to program with our beginner-friendly tutorials and exercise.
          Read tutorials, try examples, write code and learn to program. if you
          wish take a course for your better learning environment with our
          experienced instructors.
        </p>
        <button className="btn btn-primary me-2">Let's Start</button>
        <button className="btn btn-outline-primary">Join Community</button>
      </div>
      <div className="hero-img">
        <img
          src="https://www.tutorialspoint.com/static/images/simply-easy-learning.png"
          alt="hero-banner"
        />
      </div>
    </div>
  );
};

export default Hero;
