// const newsUrl = process.env.REACT_APP_URL;
// const urlApiToken = process.env.REACT_APP_URL_API_KEY;

function client(endpoint, customConfig = {}) {
  const config = {
    method: "GET",
    ...customConfig,
  };

  return (
    window
      .fetch(
        `https://api.thenewsapi.com/v1/news/all?api_token=vvCBlD82DzthRMDvQOyTQS7JL7vvEkGSfptAHvhL&search=${endpoint}`,
        config
      )
      // .fetch(`${newsUrl}all?api_token=${urlApiToken}${endpoint}`, config)
      .then(async (response) => {
        const data = await response.json();
        if (response.ok) {
          return data;
        } else {
          return Promise.reject(data);
        }
      })
  );
}

export { client };
