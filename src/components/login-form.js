import * as React from "react";
import {
  Button,
  Stack,
  TextField,
  Typography,
  CircularProgress,
} from "@mui/material";
import { useAsync } from "utils/hooks/use-async";

function LoginForm({ onSubmit, buttonText, headerText }) {
  const { run, isError, isLoading, error } = useAsync();

  const handleSubmit = (event) => {
    event.preventDefault();
    const { email, password } = event.target.elements;

    run(
      onSubmit({
        email: email.value,
        password: password.value,
      })
    );
  };

  return (
    <Stack
      component="form"
      spacing={2}
      aria-label="Register"
      onSubmit={handleSubmit}
    >
      <Typography component="h3" variant="h4" align="center" sx={{ mb: 2 }}>
        {headerText}
      </Typography>
      <TextField id="email" type="email" placeholder="Email" size="small" />
      <TextField
        id="password"
        type="password"
        placeholder="Password"
        size="small"
      />
      <Stack direction="row" spacing={2}>
        <Button type="submit" variant="contained">
          {buttonText}
          {isLoading ? (
            <CircularProgress size={24} sx={{ color: "#fff", marginLeft: 1 }} />
          ) : null}
        </Button>
      </Stack>

      {isError && (
        <Typography component="p" color="error">
          {error.message.slice(9, error.message.length - 1)}
        </Typography>
      )}
    </Stack>
  );
}

export default LoginForm;
