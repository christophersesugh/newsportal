import * as React from "react";
import { Paper, Typography, Box, Button } from "@mui/material";

function NewsCard({ article }) {
  const { image_url, title, description, published_at, categories } = article;
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
      <Box
        component="section"
        sx={{
          width: "100%",
          height: "250px",
          mx: 2,
          display: "flex",
          // overflow: "auto",
        }}
      >
        <Box component="div" sx={{ height: "100%", width: "50%" }}>
          <img
            src={image_url}
            alt={title}
            style={{
              width: "100%",
              height: "100%",
            }}
          />
        </Box>

        <Box sx={{ m: 1, width: "50%", height: "100%" }}>
          <Typography component="p" variant="caption">
            {categories ? (
              <>
                <span>
                  {categories.length > 1 ? "Categories:" : "Category:"}
                </span>{" "}
                {categories.map((item, index) => (
                  <span key={index} style={{ color: "dodgerblue" }}>
                    {item}
                    {categories.length - 1 ? "," : null}
                  </span>
                ))}
              </>
            ) : null}
          </Typography>

          <Typography component="h3" variant="h6" sx={{ my: 1 }}>
            {title}.
          </Typography>

          <Typography component="p" variant="body1" sx={{ mt: 2 }}>
            {description
              ? `${description.substring(0, 100)}...`
              : "No description!"}
          </Typography>
          <Button variant="outlined" fullWidth sx={{ mb: 4 }}>
            read more
          </Button>
          <Typography
            component="p"
            variant="caption"
            sx={{ color: "dodgerblue" }}
          >
            {published_at}
          </Typography>
        </Box>
      </Box>
    </Paper>
  );
}

export default NewsCard;
