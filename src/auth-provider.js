import * as React from "react";

import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "config";

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const localStorageKey = "__auth_provider_token__";

export const useAuth = () => {
  const [user, setUser] = React.useState(null);

  function handleUserResponse(credentials) {
    window.localStorage.setItem(localStorageKey, credentials.user.accessToken);
    setUser(credentials.user);
  }

  const register = ({ email, password }) =>
    createUserWithEmailAndPassword(auth, email, password).then(
      handleUserResponse
    );

  const login = ({ email, password }) =>
    signInWithEmailAndPassword(auth, email, password).then(handleUserResponse);

  async function getToken() {
    return window.localStorage.getItem(localStorageKey);
  }

  const logout = () => {
    signOut(auth);
    setUser(null);
  };

  React.useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, []);

  return { login, register, user, logout, getToken };
};
