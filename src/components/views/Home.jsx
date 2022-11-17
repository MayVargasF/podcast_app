import { useState, useEffect } from "react";

import Filter from "../commons/Filter.jsx";
import ResultsList from "../sections/ResultsList.jsx";

import ls from "../../services/localstorage.js";

function Home({ popularPodcasts }) {
  const [filter, setFilter] = useState(ls.get("filter", ""));

  const filterUpdater = (value) => {
    setFilter(value);
  };

  useEffect(() => ls.set("filter", filter), [filter]);

  const filteredPodcast =
    filter !== ""
      ? popularPodcasts.filter((podcast) =>
          podcast.title
            .toLowerCase()
            .includes(
              filter.toLowerCase() ||
                podcast.author.toLowerCase().includes(filter.toLowerCase())
            )
        )
      : popularPodcasts;

  return (
    <main>
      <Filter
        filterUpdater={filterUpdater}
        filter={filter}
        filteredPodcastLength={filteredPodcast.length}
      />
      <ResultsList filteredPodcast={filteredPodcast} />
    </main>
  );
}
export default Home;
