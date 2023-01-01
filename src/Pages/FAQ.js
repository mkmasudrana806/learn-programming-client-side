import React, { useContext } from "react";
import { AuthContext } from "../ContextProvider/ContextProvider";

const FAQ = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <h3>What is the main purpose of this Website?</h3>
      <p>
        The Main Purpose of this website is the student to learn programming
        languages
      </p>
      <h3>What we learn in this website? </h3>
      <p>
        In this website we learn various programming knowledge by reading
        technical blogs and to learn many programming languages with courses and
        exercises. some of them is free and some of them is promium.
      </p>
      <h3>Which languages is coverd in this site ? </h3>
      <p>
        we coverd most important and userful programming languages courses and
        tutorials with exercies like c programming, java, javaScript and C++. we
        covered many courses like react, python, AWS, data Science and Full
        Stack Web Development
      </p>
      <h3>Which courses or tutorials or exercise is free ? </h3>
      <p>
        All the totorials are free and blogs and some exercise but courses are
        premium
      </p>
    </div>
  );
};

export default FAQ;
