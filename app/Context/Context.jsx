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

  // Workaround: guard against DOM NotFoundError from removeChild in some runtimes
  useEffect(() => {
    if (typeof window === "undefined") return;

    const origRemoveChild = Node.prototype.removeChild;

    function safeRemoveChild(child) {
      try {
        if (child && child.parentNode === this) {
          return origRemoveChild.call(this, child);
        }
        // If it's not actually a child, silently ignore to avoid NotFoundError
        return child;
      } catch (err) {
        // If it's a DOMException about not found, ignore; otherwise rethrow
        if (err && err.name === "NotFoundError") {
          return child;
        }
        throw err;
      }
    }

    Node.prototype.removeChild = safeRemoveChild;

    return () => {
      Node.prototype.removeChild = origRemoveChild;
    };
  }, []);

  const { displayName, photoURL, emailVerified, email } = user;

  return (
    <MyContext.Provider value={{ handleGoogleLogin, user, handleSingOut }}>
      {children}
    </MyContext.Provider>
  );
};

export default ContextProvider;
