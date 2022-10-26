const getEpisodes = (podcastId) => {
  
  return fetch(`http://itunes.apple.com/lookup?id=${podcastId}`)
    .then((response) => response.json())
    .then((data) => {
      const podcastEpisodes = data;
      console.log(podcastEpisodes);
      return podcastEpisodes;
    });
};

export default getEpisodes;
