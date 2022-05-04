import * as React from "react";
import { Paper, Typography, Box, Grid } from "@mui/material";

function NewsCard({ article }) {
  const { image_url, title } = article;
  return (
    <Grid item xs={12} sm={6} md={6} lg={4}>
      <Paper
        elevation={2}
        component="section"
        sx={{
          height: "350px",
          width: "100%",
        }}
      >
        <Box component="div" sx={{ height: "70%" }}>
          <img
            src={image_url}
            alt={title}
            style={{
              width: "100%",
              height: "100%",
            }}
          />
        </Box>
        <Box component="div" sx={{ height: "30%", m: 1 }}>
          <Typography component="h4" variant="body1" sx={{ m: 1 }}>
            {title.substring(0, 200)}...{" "}
            <span style={{ color: "dodgerblue" }}>read more</span>
          </Typography>
        </Box>
      </Paper>
    </Grid>
  );
}

export default NewsCard;
