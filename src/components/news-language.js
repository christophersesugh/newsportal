import * as React from "react";
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";

const languages = [
  {
    code: "en",
    name: "English",
  },
  {
    code: "fr",
    name: "French",
  },
  {
    code: "de",
    name: "German",
  },
  {
    code: "el",
    name: "Greek",
  },
  {
    code: "hi",
    name: "Hindi",
  },
];

const NewsLanguage = ({ language, setLanguage }) => {
  const handleChange = (event) => {
    setLanguage(event.target.value);
  };
  return (
    <Box mt={4}>
      <Typography component="p" variant="body1">
        Select news language
      </Typography>
      <FormControl sx={{ mt: 1, minWidth: 120 }} size="small">
        <InputLabel id="language-select">Language</InputLabel>
        <Select
          labelId="language-select"
          id="demo-select-small"
          value={language}
          label="Language"
          onChange={handleChange}
        >
          {languages.map((lang) => {
            return (
              <MenuItem key={lang.code} value={lang.code}>
                {lang.name}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </Box>
  );
};

export default NewsLanguage;
