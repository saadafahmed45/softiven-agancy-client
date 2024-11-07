"use client";

import { createContext, useEffect, useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { app } from "../firebase/firebase.init";

export const MyContext = createContext([]);

const ContextProvider = ({ children }) => {


  const [user, setUser] = useState('')
  //  auth
  const googleProvider = new GoogleAuthProvider();
  const auth = getAuth(app);

  const handleGoogleLogin = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        console.log(user);
        setUser(user)
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  // sign out
  const handleSingOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        setUser("");
        // localStorage.setItem("user", JSON.stringify(""));

      })
      .catch((error) => {
        // An error happened.
      });
  };

  const { displayName, photoURL, emailVerified, email } = user;

  return (
    <MyContext.Provider value={{ handleGoogleLogin, user, handleSingOut }}>
      {children}
    </MyContext.Provider>
  );
};

export default ContextProvider;
