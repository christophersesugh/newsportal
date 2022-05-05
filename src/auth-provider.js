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

const handleUserResponse = (credentials) => {
  window.localStorage.setItem(localStorageKey, credentials.user.accessToken);
};

const getToken = async () => {
  return window.localStorage.getItem(localStorageKey);
};

const register = ({ email, password }) => {
  createUserWithEmailAndPassword(auth, email, password).then(
    handleUserResponse
  );
};

const login = ({ email, password }) => {
  signInWithEmailAndPassword(auth, email, password).then(handleUserResponse);
};

const logout = async () => {
  signOut(auth).then(() => {
    window.localStorage.removeItem(localStorageKey);
  });
};

export { register, login, logout, getToken, localStorageKey, auth };
