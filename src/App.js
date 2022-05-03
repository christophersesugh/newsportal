import * as React from "react";
import { BrowserRouter as Router } from "react-router-dom";
const AuthenticatedApp = React.lazy(() => import("AuthenticatedApp"));
const UnauthenticatedApp = React.lazy(() => import("UnauthenticatedApp"));

function App() {
  const user = true;
  return (
    <>
      {user ? (
        <Router>
          <AuthenticatedApp />
        </Router>
      ) : (
        <UnauthenticatedApp />
      )}
    </>
  );
}

export default App;
