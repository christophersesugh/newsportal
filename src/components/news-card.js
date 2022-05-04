import * as React from "react";
import { Paper, Typography, Box, Button, Grid } from "@mui/material";

function NewsCard({ article }) {
  const { image_url, title } = article;
  return (
    <Grid item xs={12} sm={6} md={6} lg={4}>
      <Paper
        elevation={2}
        component="section"
        sx={{
          height: "350px",
          // overflowY: "hidden",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Box component="div" sx={{ height: "60%" }}>
          <img
            src={image_url}
            alt={title}
            style={{
              width: "100%",
              height: "100%",
            }}
          />
        </Box>
        <Box component="div" sx={{ height: "40%", m: 1 }}>
          <Typography component="h4" variant="body1" sx={{ m: 1 }}>
            {title.substring(0, 80)}...
          </Typography>
          <Button variant="outlined">read more</Button>
        </Box>
      </Paper>
    </Grid>
  );
}

export default NewsCard;
