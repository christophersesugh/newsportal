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

export const useAuth = () => {
  const [user, setUser] = React.useState(null);

  const register = ({ email, password }) =>
    createUserWithEmailAndPassword(auth, email, password).then((credentials) =>
      setUser(credentials.user)
    );

  const login = ({ email, password }) =>
    signInWithEmailAndPassword(auth, email, password).then((credentials) => {
      setUser(credentials.user);
      console.log(credentials.user);
    });

  const logout = () => {
    signOut(auth);
    setUser(null);
  };
  return { login, register, user, logout };
};
