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

const sessionStorageKey = "__auth_provider_token__";

const handleUserResponse = (credentials) => {
  window.sessionStorage.setItem(
    sessionStorageKey,
    credentials._tokenResponse.refreshToken
  );
};

const getToken = async () => {
  return window.sessionStorage.getItem(sessionStorageKey);
};

const register = ({ email, password }) =>
  createUserWithEmailAndPassword(auth, email, password).then(
    handleUserResponse
  );

const login = ({ email, password }) =>
  signInWithEmailAndPassword(auth, email, password).then(handleUserResponse);

const logout = async () => {
  signOut(auth).then(() => {
    window.localStorage.removeItem(sessionStorageKey);
  });
};

export { register, login, logout, getToken, sessionStorageKey, auth };
