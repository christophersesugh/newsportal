import React from "react";
import { Box, Container, Typography } from "@mui/material";

const ErrorFallback = ({ error }) => {
  return (
    <Container maxWidth="md">
      <Box
        component="div"
        sx={{
          heigh: "100%",
          width: "100%",
          display: "gird",
          placeItems: "center",
        }}
      >
        <Typography component="h4" variant="h5">
          Oh... There was an error
        </Typography>
        <Typography component="pre" variant="body2" color="error">
          {error.message}
        </Typography>
      </Box>
    </Container>
  );
};

export default ErrorFallback;
