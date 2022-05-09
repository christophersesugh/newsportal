import * as React from "react";
import { useParams } from "react-router-dom";
import {
  Box,
  CircularProgress,
  Container,
  Grid,
  Paper,
  Toolbar,
  Typography,
} from "@mui/material";
import { useAsync } from "utils/hooks/use-async";
import { client } from "utils/api-client";
import { useAuth } from "context/auth-context";
const api_token = "?api_token=vvCBlD82DzthRMDvQOyTQS7JL7vvEkGSfptAHvhL";

const Article = () => {
  const { data, isLoading, isError, isSuccess, error, run } = useAsync();
  const { token } = useAuth();
  const { uuid } = useParams();

  React.useEffect(() => {
    run(client(`uuid/${uuid}${api_token}`, { token: token }));
  }, [run, token, uuid]);

  const { image_url, title, url, snippet } = data ?? isLoading;

  return (
    <Container maxWidth="sm">
      <Toolbar />
      <Grid container>
        <Grid item sm={12} justifyContent="center">
          {isLoading ? (
            <Paper
              elevation={0}
              sx={{
                width: "100%",
                height: "auto",
                display: "grid",
                placeItems: "center",
              }}
            >
              <CircularProgress size={150} />
            </Paper>
          ) : isSuccess ? (
            <Paper elevation={3} sx={{ width: "100%", height: "auto" }}>
              <Box component="div" sx={{ height: "50%" }}>
                <img
                  src={image_url}
                  alt={title}
                  style={{ width: "100%", height: "300px" }}
                />
              </Box>
              <Box component="div" sx={{ height: "50%", mx: 2 }}>
                <Typography component="h3" variant="h5" sx={{ my: 2 }}>
                  <strong>Title: </strong>
                  <br />
                  {title}
                </Typography>
                <Typography component="p" variant="body1" sx={{ m: 0.5 }}>
                  <strong>
                    <a target="_blank" href={url} rel="noreferrer">
                      {" "}
                      Read full article
                    </a>
                  </strong>
                </Typography>
                <Typography component="p" variant="body2" sx={{ m: 0.5 }}>
                  {snippet}
                </Typography>
              </Box>
            </Paper>
          ) : null}
          {isError && (
            <Box component="div" mt={4}>
              <Typography component="p">
                Oh! There was an error, Try refreshing the page.
              </Typography>
              <Typography component="p" sx={{ color: "red" }}>
                {error.message}
              </Typography>
            </Box>
          )}
        </Grid>
      </Grid>
    </Container>
  );
};

export default Article;
