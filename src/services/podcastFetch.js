const getEpisodes = (podcastId) => {
  return fetch(
    `https://api.allorigins.win/get?url=${encodeURIComponent(
      `https://itunes.apple.com/lookup?id=${podcastId}&media=podcast&entity=podcastEpisode&limit=100`
    )}`
  )
    .then((response) => response.json())
    .then((data) => {
      const podcastInfo = JSON.parse(data.contents)?.results;
      console.log(JSON.parse(data.contents));
      return podcastInfo;
    });
};

export default getEpisodes;
