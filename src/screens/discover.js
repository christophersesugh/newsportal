import * as React from "react";
import {
  Box,
  Button,
  Container,
  TextField,
  CircularProgress,
  Grid,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { client } from "utils/api-client";
import { useAsync } from "utils/hooks/use-async";
import NewsCard from "components/news-card";
import NewsLanguage from "components/news-language";
import NewsCategory from "components/news-category";

const endpoint =
  "all?api_token=vvCBlD82DzthRMDvQOyTQS7JL7vvEkGSfptAHvhL&search=";
const lang = "&language=";
const cat = "&categories=";

function DiscoverNews() {
  const { data, run, error, reset, isError, isSuccess, isLoading } = useAsync();
  const [query, setQuery] = React.useState("");
  const [queried, setQueried] = React.useState(false);
  const [language, setLanguage] = React.useState("en");
  const [category, setCategory] = React.useState("business");

  const handleSubmit = (event) => {
    event.preventDefault();
    setQuery(event.target.elements.search.value);
    setQueried(true);
  };

  React.useEffect(() => {
    run(
      client(
        `${endpoint}${encodeURIComponent(
          query
        )}${lang}${language}${cat}${category}`
      )
    );
  }, [category, language, queried, query, run]);

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
          <Typography component="p">
            Oh! There was an error, try refreshing the page.
          </Typography>
          <Typography component="p" sx={{ color: "red" }}>
            {error.message}
          </Typography>
        </Box>
      ) : null}

      <Box
        component="div"
        sx={{ display: "grid", placeItems: "center", mt: 4 }}
      >
        <Typography component="h5" variant="h6">
          Filter News
        </Typography>
        <Box
          component="section"
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
          }}
        >
          <NewsLanguage language={language} setLanguage={setLanguage} />
          <NewsCategory category={category} setCategory={setCategory} />
        </Box>
      </Box>
      {isLoading ? (
        <Grid container mt={4} sx={{ display: "grid", placeItems: "center" }}>
          <CircularProgress size={60} />
        </Grid>
      ) : isSuccess ? (
        data?.data?.length ? (
          <Grid container spacing={4} mt={5}>
            {data.data.map((article) => {
              return <NewsCard key={article.uuid} article={article} />;
            })}
          </Grid>
        ) : (
          <Typography component="h6" variant="h6" sx={{ mt: 4 }}>
            No results for the given query!
          </Typography>
        )
      ) : null}
    </Container>
  );
}

export default DiscoverNews;
