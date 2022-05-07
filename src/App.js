import * as React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { useAuth } from "context/auth-context";
import Loading from "components/loading";
const AuthenticatedApp = React.lazy(() => import("authenticated-app"));
const UnauthenticatedApp = React.lazy(() => import("unauthenticated-app"));

function App() {
  const { user, login, register, logout } = useAuth();

  return (
    <React.Suspense fallback={<Loading />}>
      {user ? (
        <Router>
          <AuthenticatedApp logout={logout} user={user} />
        </Router>
      ) : (
        <UnauthenticatedApp login={login} register={register} />
      )}
    </React.Suspense>
  );
}

export default App;
