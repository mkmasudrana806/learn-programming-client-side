import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);

const ContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  //create user with email and password
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // sigin exiting user with email and password
  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // sign in with google
  const googleSignIn = (provider) => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  // sign in github
  const githubSignIn = (provider) => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  // log out accoutn
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  // update user profile
  const updateUserProfile = (profile) => {
    return updateProfile(auth.currentUser, profile);
  };
  // verification of email
  const verifyEmail = () => {
    return sendEmailVerification(auth.currentUser);
  };

  // handle reset password

  const resetPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  // on state changed funciton
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (curentUser) => {
      if (curentUser === null || curentUser.emailVerified) {
        setUser(curentUser);
      }
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);
  // all the auth info are passing here
  const authInfo = {
    user,
    createUser,
    signInUser,
    googleSignIn,
    githubSignIn,
    logOut,
    loading,
    updateUserProfile,
    verifyEmail,
    resetPassword,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default ContextProvider;
