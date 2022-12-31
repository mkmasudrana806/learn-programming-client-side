import React, { useContext } from "react";
import { AuthContext } from "../ContextProvider/ContextProvider";

const FAQ = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <h3>{user.displayName}</h3>
      <p>Email: {user.email}</p>
    </div>
  );
};

export default FAQ;
