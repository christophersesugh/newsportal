// const appUrl =
//   // eslint-disable-next-line no-undef
//   `https://newsapi.org/v2/everything?q=${endpoint}&from=2022-05-02&sortBy=popularity&apiKey=86cc7d52a4904a0d8165cd8295a8872f`;

function client(endpoint, customConfig = {}) {
  const config = {
    method: "GET",
    ...customConfig,
  };

  return window
    .fetch(
      `http://newsapi.org/v2/${endpoint}&from=2022-05-02&sortBy=popularity&apiKey=86cc7d52a4904a0d8165cd8295a8872f`,
      config
    )
    .then(async (response) => {
      const data = await response.json();
      if (response.ok) {
        return data;
      } else {
        return Promise.reject(data);
      }
    });
}

// everything?q=

export { client };
