const getPopular = () => {
  return fetch(
    "https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json"
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data.feed.entry);
      return data.feed.entry;
    });
};

export default getPopular;
