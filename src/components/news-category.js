import * as React from "react";
import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";

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
      <FormControl sx={{ mt: 1, minWidth: 120 }} size="small">
        <InputLabel id="language-select">Categories</InputLabel>
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
