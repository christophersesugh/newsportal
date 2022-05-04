import * as React from "react";
import {
  Box,
  Button,
  Container,
  TextField,
  CircularProgress,
  Stack,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { client } from "utils/hooks/api-client";
import { useAsync } from "utils/hooks/use-async";
import NewsCard from "./news-card";

function DiscoverNews() {
  const { data, run, error, reset, isError, isSuccess, isLoading } = useAsync();
  const [query, setQuery] = React.useState("");
  const [queried, setQueried] = React.useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    setQuery(event.target.elements.search.value);
    setQueried(true);
  };

  React.useEffect(() => {
    if (!queried) {
      return;
    }
    run(client(`&search=${encodeURIComponent(query)}`));
  }, [queried, query, run]);

  console.log(data);

  return (
    <Container maxWidth="md">
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

      {isError ? (
        <Box component="div" mt={4}>
          <Typography component="p">Oh! There was an error.</Typography>
          <Typography component="p" sx={{ color: "red" }}>
            {error.message}
          </Typography>
        </Box>
      ) : null}

      {isSuccess ? (
        data?.data?.length ? (
          <Stack spacing={4} sx={{ my: 5 }}>
            {data.data.map((article) => {
              return <NewsCard key={article.uuid} article={article} />;
            })}
          </Stack>
        ) : (
          <Typography component="h6" variant="h6">
            No results for the given query!
          </Typography>
        )
      ) : null}
    </Container>
  );
}

export default DiscoverNews;
