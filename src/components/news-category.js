import * as React from "react";
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";

const categories = [
  {
    name: "business",
  },
  {
    name: "sports",
  },
  {
    name: "science",
  },
  {
    name: "health",
  },
  {
    name: "tech",
  },
  {
    name: "entertainment",
  },
  {
    name: "food",
  },
  {
    name: "travel",
  },
  {
    name: "politics",
  },
];

const NewsCategory = ({ category, setCategory }) => {
  const handleChange = (event) => {
    setCategory(event.target.value);
  };
  return (
    <Box mt={4}>
      <Typography component="p" variant="body1">
        Select news category
      </Typography>
      <FormControl sx={{ mt: 1, minWidth: 120 }} size="small">
        <InputLabel id="language-select">Category</InputLabel>
        <Select
          labelId="category-select"
          id="demo-select-small"
          value={category}
          label="Category"
          onChange={handleChange}
        >
          {categories.map((cat) => {
            return (
              <MenuItem key={cat.name} value={cat.name}>
                {cat.name}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </Box>
  );
};

export default NewsCategory;
