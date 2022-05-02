import * as React from "react";
import { Button, Stack, TextField, Typography } from "@mui/material";

function LoginForm({ onSubmit, buttonText, headerText }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const { email, password } = event.target.elements;

    onSubmit({
      email: email.value,
      password: password.value,
    });
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
        </Button>
      </Stack>
    </Stack>
  );
}

export default LoginForm;
