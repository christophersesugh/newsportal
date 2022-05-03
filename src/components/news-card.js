import * as React from "react";
import { Paper, Typography, Box, Stack, Button } from "@mui/material";

function NewsCard({ article }) {
  const { urlToImage, title, author, description } = article;
  return (
    <Paper
      elevation={1}
      sx={{
        height: "100%",
        width: "100%",
        display: "grid",
        placeItems: "center",
      }}
    >
      <Stack
        direction="row"
        sx={{
          width: "100%",
          height: "100%",
          mx: 2,
        }}
      >
        <img
          src={urlToImage}
          alt={title}
          width={200}
          height={200}
          style={{
            width: "50%",
            height: "100%",
          }}
        />

        <Box sx={{ m: 1 }}>
          <Typography component="p" variant="caption">
            {author ? (
              <>
                <span>Author:</span>{" "}
                <span style={{ color: "dodgerblue" }}>{author}</span>
              </>
            ) : null}
          </Typography>
          <Typography component="h3" variant="h5" align="center">
            <strong>Title:</strong>
          </Typography>
          <Typography component="h3" variant="h6" align="center" sx={{ my: 1 }}>
            {title}
          </Typography>
          <Typography component="h4" variant="h5" align="center">
            <strong>Description:</strong>
          </Typography>
          <Typography
            component="p"
            variant="body1"
            align="center"
            sx={{ mt: 1 }}
          >
            {description.substring(0, 100)}...
          </Typography>
          <Button variant="outlined" fullWidth sx={{ mb: 4 }}>
            read more
          </Button>
        </Box>
      </Stack>
    </Paper>
  );
}

export default NewsCard;
