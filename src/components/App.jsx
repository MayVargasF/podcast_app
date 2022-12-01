import Header from "./commons/Header.jsx";
import Home from "./views/Home.jsx";
import PodcastDetails from "./views/PodcastDetails.jsx";

import { LoadingContext } from "../contexts/LoadingContext.js";

import getPopularPodcasts from "../services/popularFetch.js";
import getEpisodes from "../services/episodesFetch.js";
import ls from "../services/localstorage.js";

import { useEffect, useState } from "react";
import { Routes, Route, matchPath, useLocation } from "react-router-dom";

import "../styles/App.scss";
import EpisodeDetails from "./views/EpisodeDetails.jsx";

function App() {
  const [popularPodcasts, setPopularPodcasts] = useState(
    ls.get("popularPodcastLs", [])
  );

  //const [episodes, setEpisodes] = useState(ls.get("podcastEpisodesLs", []));

  const [loading, setLoading] = useState(true);

  const loadingUpdate = (bool) => {
    setLoading(bool);
  };

  //Fetch popular podcasts.

  useEffect(() => {
    if (popularPodcasts.length === 0) {
      getPopularPodcasts().then((data) => {
        setPopularPodcasts(data);
        ls.set("popularPodcastLs", data);
      });
    }
  }, [popularPodcasts]);

  const { pathname } = useLocation();
  const podcastDataPath = matchPath("/podcast/:podcastId", pathname);

  //Get podcastFound

  const podcastId =
    podcastDataPath !== null ? podcastDataPath.params.podcastId : null;

  const podcastFound = popularPodcasts.find(
    (podcast) => podcast.id === podcastId
  );

  if (podcastFound) {
    ls.set("podcastFound", podcastFound);
  }

  const [episodes, setEpisodes] = useState([]);
  //Get episodeFound

  const episodeDataPath = matchPath(
    "/podcast/:podcastId/episode/:episodeId",
    pathname
  );

  const episodeId =
    episodeDataPath !== null ? episodeDataPath.params.episodeId : null;

  const episodeFound =
    episodes.length > 0
      ? episodes.find((episode) => episode.id === episodeId)
      : null;

  if (episodeFound) {
    ls.set("episodeFound", episodeFound);
  }

  //Fetch podcast episodes.

  useEffect(() => {
    if (podcastId) {
      getEpisodes(podcastId).then((data) => {
        setEpisodes(data);
        ls.set("podcastEpisodesLs", data);
      });
    }
  }, [podcastId]);

  return (
    <LoadingContext.Provider
      value={{ loading: loading, setLoading: setLoading }}
    >
      <div className="globalContainer">
        <Header />
        <Routes>
          <Route
            path="/podcast_app/"
            element={<Home popularPodcasts={popularPodcasts} />}
          />
          <Route
            path="/podcast/:podcastId"
            element={
              <PodcastDetails
                podcastFound={podcastFound}
                episodes={episodes}
                loadingUpdate={loadingUpdate}
              />
            }
          />
          <Route
            path="/podcast/:podcastId/episode/:episodeId"
            element={<EpisodeDetails episodeFound={episodeFound} />}
          />
        </Routes>
      </div>
    </LoadingContext.Provider>
  );
}

export default App;
