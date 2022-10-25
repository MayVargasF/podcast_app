const getPopular = () => {
  return fetch(
    "https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json"
  )
    .then((response) => response.json())
    .then((data) => {
      const podcastList = data.feed.entry;
      console.log(podcastList);
      const dataClean = podcastList.map((podcast) => ({
        id: podcast.id.attributes["im:id"].toString(),
        image: podcast["im:image"][2].label,
        title: podcast.title.label,
        author: podcast["im:artist"].label,
        summary: podcast.summary.label,
      }));
      return dataClean;
    });
};

export default getPopular;
