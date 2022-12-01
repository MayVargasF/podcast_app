import { useState, useEffect } from "react";

import Filter from "../commons/Filter.jsx";
import ResultsList from "../sections/ResultsList.jsx";

import ls from "../../services/localstorage.js";
import { LoadingContext } from "../../contexts/LoadingContext.js";
import { useContext } from "react";

function Home({ popularPodcasts }) {
  const [filter, setFilter] = useState(ls.get("filter", ""));

  const filterUpdater = (value) => {
    setFilter(value);
  };

  const cntxLoadingContext = useContext(LoadingContext);

  useEffect(() => ls.set("filter", filter), [filter]);

  useEffect(() => {
    if (cntxLoadingContext.loading) {
      setTimeout(() => {
        cntxLoadingContext.setLoading(false);
      }, 2000);
    }
  }, [cntxLoadingContext]);

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
      {!cntxLoadingContext.loading && (
        <ResultsList filteredPodcast={filteredPodcast} />
      )}
    </main>
  );
}
export default Home;
