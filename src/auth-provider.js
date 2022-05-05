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
  const [status, setStatus] = React.useState("idle");
  const [error, setError] = React.useState(null);
  const [user, setUser] = React.useState(null);

  const isSuccess = status === "success";
  const isLoading = status === "loading";
  const isError = status === "error";
  const isIdle = status === "idle";

  const handleUserResponse = (credentials) => {
    window.localStorage.setItem(localStorageKey, credentials.user.accessToken);
    setUser(credentials.user);
  };

  const getToken = async () => {
    return window.localStorage.getItem(localStorageKey);
  };

  const register = ({ email, password }) => {
    setStatus("loading");
    createUserWithEmailAndPassword(auth, email, password)
      .then(handleUserResponse, setStatus("success"))
      .catch((error) => {
        setError(error);
        setStatus("error");
      });
  };

  const login = ({ email, password }) => {
    setStatus("loading");
    signInWithEmailAndPassword(auth, email, password)
      .then(handleUserResponse, setStatus("success"))
      .catch((error) => {
        setError(error);
        setStatus("error");
      });
  };

  const logout = async () => {
    setStatus("loading");
    signOut(auth)
      .then(() => {
        window.localStorage.removeItem(localStorageKey);
        setUser(null);
      })
      .catch((error) => {
        setError(error);
        setStatus("error");
      });
  };

  React.useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
      setStatus("success");
    });
  }, []);

  return {
    login,
    register,
    user,
    logout,
    getToken,
    error,
    isLoading,
    isSuccess,
    isError,
    isIdle,
  };
};
