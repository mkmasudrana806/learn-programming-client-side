import React, { createContext } from "react";

export const AuthContext = createContext();
const ContextProvider = ({ children }) => {
  const user = {
    displayName: "masud rana",
    email: "mkmasudrana806@gmail.com",
  };
  const authInfo = { user };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default ContextProvider;
