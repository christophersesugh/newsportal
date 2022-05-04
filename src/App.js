import * as React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { useAuth } from "auth-provider";
const AuthenticatedApp = React.lazy(() => import("authenticated-app"));
const UnauthenticatedApp = React.lazy(() => import("unauthenticated-app"));

function App() {
  const { user, login, logout, register } = useAuth();

  return (
    <>
      {user ? (
        <Router>
          <AuthenticatedApp logout={logout} user={user} />
        </Router>
      ) : (
        <UnauthenticatedApp login={login} register={register} />
      )}
    </>
  );
}

export default App;
