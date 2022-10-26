const getEpisodes = (podcastId) => {
  const url = `https://itunes.apple.com/lookup?id=${podcastId}`;

  // fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(`https://itunes.apple.com/lookup?id=${podcastId}}`)
  // .then(response => {
  //   if (response.ok) return response.json()
  //   throw new Error('Network response was not ok.')
  // })
  // .then(data => console.log(data.contents));


  return fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(`https://itunes.apple.com/lookup?id=${podcastId}`)}`)
    .then(response => {
        if (response.ok) return response.json()
        throw new Error('Network response was not ok.')
      })
      .then(data => console.log(data.contents));
      
};

export default getEpisodes;
