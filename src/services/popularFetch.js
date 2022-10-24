const getPopular = () => {
  return fetch(
    "https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json"
  )
    .then((response) => response.json())
    .then((data) => {
      const podcastList =  data.feed.entry;
      const dataClean = podcastList.map(podcast => ({
        image: podcast['im:image'][2].label,
        title: podcast.title.label,
        author:  podcast['im:artist'].label
      }));
      return dataClean;
    });
};

export default getPopular;
