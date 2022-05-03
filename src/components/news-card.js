import * as React from "react";
import { Paper, Typography, Box, Stack, Button } from "@mui/material";

function NewsCard({ article }) {
  const { urlToImage, title, author, description, publishedAt } = article;
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
          display: "flex",
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

          <Typography component="h3" variant="h6" sx={{ my: 1 }}>
            {title}.
          </Typography>

          <Typography component="p" variant="body1" sx={{ mt: 2 }}>
            {description.substring(0, 100)}...
          </Typography>
          <Button variant="outlined" fullWidth sx={{ mb: 4 }}>
            read more
          </Button>
          <Typography
            component="p"
            variant="caption"
            sx={{ color: "dodgerblue" }}
          >
            {publishedAt}
          </Typography>
        </Box>
      </Stack>
    </Paper>
  );
}

export default NewsCard;
