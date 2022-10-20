const getPopular = () => {
    
    return fetch("https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        return data;
      });
  };
  
  export default getPopular;