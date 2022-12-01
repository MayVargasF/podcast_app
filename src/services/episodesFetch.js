const getEpisodes = (podcastId) => {
  return fetch(
    `https://api.allorigins.win/get?url=${encodeURIComponent(
      `https://itunes.apple.com/lookup?id=${podcastId}&media=podcast&entity=podcastEpisode&limit=100`
    )}`
  )
    .then((response) => response.json())
    .then((data) => {
      const podcastInfo = JSON.parse(data.contents)?.results;
      const dataClean = podcastInfo.map((episode) => ({
        podcastId: episode.collectionId,
        name: episode.trackName,
        description: episode.description,
        date: episode.releaseDate,
        duration: episode.trackTimeMillis,
        track: episode.previewUrl,
        id: episode.trackId.toString(),
      }));

      dataClean.shift();
      return dataClean;
    });
};

export default getEpisodes;
