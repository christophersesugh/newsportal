import * as React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { useAuth } from "context/auth-context";
import Loading from "components/loading";
const AuthenticatedApp = React.lazy(() =>
  import(/* webpackPrefetch: true */ "authenticated-app")
);
const UnauthenticatedApp = React.lazy(() => import("unauthenticated-app"));

function App() {
  const { user } = useAuth();

  return (
    <React.Suspense fallback={<Loading />}>
      {user ? (
        <Router>
          <AuthenticatedApp />
        </Router>
      ) : (
        <UnauthenticatedApp />
      )}
    </React.Suspense>
  );
}

export default App;
