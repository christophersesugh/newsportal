import { initializeApp } from "firebase/app";
import { firebaseConfig } from "config";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const getToken = async () => null;

const localStorageKey = "_auth_provider_token_";

// const handleUserResponse = ({ user }) => {
//   window.localStorage.setItem(localStorageKey, user.token);
//   return user;
// };

// const login = true;
// const register = true;

// const email = "christohybrid185@gmail.com";

// const password = "sesugh185";

const register = ({ email, password }) =>
  createUserWithEmailAndPassword(auth, email, password).then((cred) =>
    console.log(cred.user)
  );

const login = ({ email, password }) => {
  signInWithEmailAndPassword(auth, email, password).then((cred) =>
    console.log(cred.user)
  );
};

// const login = ({ email, password }) =>
//   signInWithEmailAndPassword(auth, email, password).then((cred) =>
//     console.log(cred.user)
//   );

export { login, register, localStorageKey, getToken };
