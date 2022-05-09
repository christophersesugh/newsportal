import React from "react";
import { Box, Button, CircularProgress, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchForm = (searchFormProps) => {
  const { setQueried, setQuery, reset, isError, isLoading } = searchFormProps;

  const handleSubmit = (event) => {
    event.preventDefault();
    setQuery(event.target.elements.search.value);
    setQueried(true);
  };
  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ display: "flex", mt: 4 }}
    >
      <TextField
        id="search"
        placeholder="Search News..."
        size="small"
        fullWidth
      />
      <Button
        type="submit"
        disableElevation
        variant="text"
        sx={{ m: 0, ml: -8 }}
      >
        {isLoading ? (
          <CircularProgress size={24} />
        ) : isError ? (
          <span onClick={reset} style={{ color: "red" }}>
            x
          </span>
        ) : (
          <SearchIcon />
        )}
      </Button>
    </Box>
  );
};

export default SearchForm;
