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
  const { data, run, isError, isSuccess, error, isLoading } = useAsync();
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
    run(client(`everything?q=${encodeURIComponent(query)}`));
  }, [queried, query, run]);

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
            <span style={{ color: "red" }}>x</span>
          ) : (
            <SearchIcon />
          )}
        </Button>
      </Box>

      {isError ? (
        <Box component="div">
          <Typography component="p">Oh! There was an error.</Typography>
          <Typography component="pre" sx={{ color: "red" }}>
            {error.message}
          </Typography>
        </Box>
      ) : null}

      {isSuccess ? (
        data?.articles?.length ? (
          <Stack spacing={2} sx={{ my: 5 }}>
            {data.articles.map((article) => {
              return <NewsCard key={article.url} article={article} />;
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
