import * as React from "react";
import { onAuthStateChanged } from "firebase/auth";
import * as auth from "auth-provider";
import Loading from "components/loading";
import ErrorFallback from "screens/error-fallback";

const AuthContext = React.createContext();
AuthContext.displayName = "AuthContext";

const AuthProvider = ({ children }) => {
  const [status, setStatus] = React.useState("idle");
  const [user, setUser] = React.useState(null);
  const [error, setError] = React.useState(null);

  const isIdle = status === "idle";
  const isLoading = status === "loading";
  const isError = status === "error";
  const isSuccess = status === "success";

  const register = (form) => auth.register(form);
  const login = (form) => auth.login(form);

  const logout = async () => {
    auth.logout();
    setUser(null);
  };

  const token = auth.getToken();

  React.useEffect(() => {
    setStatus("loading");
    onAuthStateChanged(
      auth.auth,
      (user) => {
        setUser(user);
        setStatus("success");
      },
      (error) => {
        setError(error);
        setStatus("error");
      }
    );
  }, []);

  if (isLoading || isIdle) {
    return <Loading />;
  }

  if (isError) {
    return <ErrorFallback error={error} />;
  }

  if (isSuccess) {
    const props = { register, login, user, logout, token };

    return (
      <AuthContext.Provider value={props}>{children}</AuthContext.Provider>
    );
  }

  throw new Error(`Unhandled status ${status}`);
};

const useAuth = () => {
  const context = React.useContext(AuthContext);
  if (context === "undefined") {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export { AuthProvider, useAuth };
