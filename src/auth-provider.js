import * as React from "react";

import {
  createUserWithEmailAndPassword,
  getAuth,
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

  const register = ({ email, password }) =>
    createUserWithEmailAndPassword(auth, email, password).then(
      (credentials) => {
        window.localStorage.setItem(
          localStorageKey,
          credentials.user.accessToken
        );
        setUser(credentials.user);
      }
    );

  const login = ({ email, password }) =>
    signInWithEmailAndPassword(auth, email, password).then((credentials) => {
      window.localStorage.setItem(
        localStorageKey,
        credentials.user.accessToken
      );
      setUser(credentials.user);
    });

  async function getToken() {
    return window.localStorage.getItem(localStorageKey);
  }

  const logout = () => {
    signOut(auth);
    setUser(null);
  };
  return { login, register, user, logout, getToken };
};
