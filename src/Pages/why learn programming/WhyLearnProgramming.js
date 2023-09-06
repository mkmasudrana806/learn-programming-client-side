import React from "react";
import "./WhyLearnProgramming.css";

const WhyLearnProgramming = () => {
  return (
    <div className="my-5">
      <h2 className="text-center fw-bold">Why Learn Programming?</h2>
      <div className="why-learn-prog-container">
        <div>
          <h4>Programming made easy</h4>
          <p>
            We focus on simplicity. Programming tutorials and examples written
            in simple, understandable language for beginners.{" "}
          </p>
        </div>
        <div>
          <h4>Content You Can Trust</h4>
          <p>
            A dedicated group of experts continually working to create
            programming resources that is accurate and easier to understand.{" "}
          </p>
        </div>
        <div>
          <h4>Learn by Doing</h4>
          <p>
            The only way to learn to program is by writing code. We provide a
            lot of complete examples so that run and edit code on your own.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyLearnProgramming;
