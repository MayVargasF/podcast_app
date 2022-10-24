const getDetails = (podcastId) => {
    return fetch(
      `https://itunes.apple.com/lookup?id=${podcastId}`
    )
      .then((response) => response.json())
      .then((data) => {
        const podcastDetail =data.map(podcast => podcast);
        return podcastDetail;
      });
  };
  
  export default getDetails;