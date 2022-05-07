import * as React from "react";
import { useParams } from "react-router-dom";
import {
  Box,
  Container,
  Grid,
  Paper,
  Toolbar,
  Typography,
} from "@mui/material";
import { useAsync } from "utils/hooks/use-async";
import { client } from "utils/hooks/api-client";
import Loading from "components/loading";

const api_token = "?api_token=vvCBlD82DzthRMDvQOyTQS7JL7vvEkGSfptAHvhL";

const Article = ({ user }) => {
  const { data, run } = useAsync();

  const { uuid } = useParams();

  const userToken = user.reloadUserInfo.localId;

  console.log(userToken);

  React.useEffect(() => {
    run(client(`uuid/${uuid}${api_token}`, { token: userToken }));
  }, [run, userToken, uuid]);

  const { image_url, title, url, snippet } = data ?? <Loading />;

  return (
    <Container maxWidth="sm">
      <Toolbar />
      <Grid container>
        <Grid item sm={12} justifyContent="center">
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
        </Grid>
      </Grid>
    </Container>
  );
};

export default Article;
