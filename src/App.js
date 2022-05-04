import * as React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "config";
// import * as auth from "auth-provider";
const AuthenticatedApp = React.lazy(() => import("authenticated-app"));
const UnauthenticatedApp = React.lazy(() => import("unauthenticated-app"));

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

function App() {
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

  return (
    <>
      {user ? (
        <Router>
          <AuthenticatedApp logout={logout} />
        </Router>
      ) : (
        <UnauthenticatedApp login={login} register={register} />
      )}
    </>
  );
}

export default App;
