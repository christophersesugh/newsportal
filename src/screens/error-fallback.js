import React from "react";
import { Box, Container, Typography } from "@mui/material";

const ErrorFallback = ({ error }) => {
  return (
    <Container maxWidth="md">
      <Box
        component="div"
        sx={{
          height: "100%",
          width: "100%",
          display: "gird",
          placeItems: "center",
        }}
      >
        <Box component="div">
          <Typography component="h4" variant="h5">
            Oh... There was an error, try refreshing the page
          </Typography>
          <Typography component="pre" variant="body2" color="error">
            {error.message}
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default ErrorFallback;
