const getEpisodes = (podcastId) => {
  return fetch(
    `https://api.allorigins.win/get?url=${encodeURIComponent(
      `https://itunes.apple.com/lookup?id=${podcastId}&media=podcast&entity=podcastEpisode&limit=100`
    )}`
  )
    .then((response) => response.json())
    .then((data) => {
      const podcastInfo = JSON.parse(data.contents)?.results;

      const millisecondsConversor = (ms) => {
        const hours = Math.floor(ms / 3600000);
        const mins = Math.floor((ms % 3600000) / 60000);
        const secs = Math.floor(((ms % 3600000) % 60000) / 1000);
        const result = hours !== 0 ? [hours, mins, secs] : [mins, secs];

        return result.join(":");
      };

      const dataCleaner = (date) => {
        const clearDate = new Date(date);
        return `${clearDate.getDate()}/${clearDate.getMonth()}/${clearDate.getFullYear()}`;
      };

      const dataClean = podcastInfo.map((episode) => ({
        name: episode.trackName,
        description: episode.description,
        date: dataCleaner(episode.releaseDate),
        duration: millisecondsConversor(episode.trackTimeMillis),
        track: episode.previewUrl,
        id: episode.trackId.toString(),
      }));

      dataClean.shift();
      return dataClean;
    });
};

export default getEpisodes;
