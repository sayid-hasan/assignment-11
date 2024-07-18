import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import auth from "../../firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";

import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";

import useAxios from "../../hooks/useAxios";

export const AuthContext = createContext();

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
  const axiosNonSecure = useAxios();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const createUser = (email, pass) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, pass);
  };

  // onAuthStateChange
  // ONAUTH STATE CHANGE
  useEffect(() => {
    const unsubscrube = onAuthStateChanged(auth, (currentUser) => {
      console.log("current User ", currentUser);
      setUser(currentUser);
      if (currentUser) {
        console.log(currentUser);

        const userInfo = { email: currentUser?.email };
        // sent useremail and get token in response and save it in 1 cookies 2. or localstorage or state/memory
        axiosNonSecure.post("/jwt", userInfo).then((res) => {
          // console.log("token", res.data.token);
          if (res.data.token) {
            localStorage.setItem("access-token", res?.data?.token);
            setLoading(false);
          }
        });
      } else {
        //erase the token from locastorage or cookie or caching or memory
        localStorage.removeItem("access-token");
        setLoading(false);
      }
    });
    return () => {
      return unsubscrube();
    };
  }, [axiosNonSecure]);

  // update propfile

  const updateUserProfile = (username, image) => {
    return updateProfile(auth.currentUser, {
      displayName: username,
      photoURL: image,
    });
  };
  const loginUser = (email, pass) => {
    return signInWithEmailAndPassword(auth, email, pass);
  };
  const logoutUser = () => {
    setLoading(true);
    setUser(null);
    return signOut(auth);
  };
  const logInwithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const loginWithGithub = () => {
    setLoading(true);
    return signInWithPopup(auth, githubProvider);
  };

  const authInfo = {
    user,
    setUser,
    createUser,
    loginUser,
    logoutUser,
    loginWithGithub,
    logInwithGoogle,
    loading,
    updateUserProfile,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};
AuthProvider.propTypes = {
  children: PropTypes.node,
};

export default AuthProvider;
