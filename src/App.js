import * as React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import * as auth from "auth-provider";
import Loading from "components/loading";
const AuthenticatedApp = React.lazy(() => import("authenticated-app"));
const UnauthenticatedApp = React.lazy(() => import("unauthenticated-app"));

function App() {
  const [user, setUser] = React.useState(null);

  const register = (form) => auth.register(form);

  const login = (form) => auth.login(form);

  const logout = () => {
    auth.logout();
    setUser(null);
  };

  React.useEffect(() => {
    onAuthStateChanged(auth.auth, (user) => setUser(user));
  }, []);

  console.log(user);

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
