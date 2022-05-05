import * as React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { useAuth } from "auth-provider";
import Loading from "components/loading";
import { Box, Typography } from "@mui/material";
const AuthenticatedApp = React.lazy(() => import("authenticated-app"));
const UnauthenticatedApp = React.lazy(() => import("unauthenticated-app"));

function App() {
  const {
    user,
    login,
    logout,
    register,
    error,
    isError,
    isLoading,
    isSuccess,
    isIdle,
  } = useAuth();

  if (isIdle || isLoading) {
    return <Loading />;
  }

  if (isError) {
    return (
      <Box>
        <Typography component="p">
          Oh oh... There was an error. Try refreshing the page.
        </Typography>
        <Typography component="pre" color="error">
          {error.message}
        </Typography>
      </Box>
    );
  }

  if (isSuccess) {
    return (
      <>
        {user ? (
          <Router>
            <AuthenticatedApp logout={logout} />
          </Router>
        ) : (
          <UnauthenticatedApp
            login={login}
            register={register}
            isError={isError}
            isLoading={isLoading}
            error={error}
          />
        )}
      </>
    );
  }
}

export default App;
