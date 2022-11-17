import Header from "./commons/Header.jsx";
import Home from "./views/Home.jsx";
import PodcastDetails from "./views/PodcastDetails.jsx";

import getPopularPodcasts from "../services/popularFetch.js";
import getEpisodes from "../services/podcastFetch.js";
import ls from "../services/localstorage.js";

import { useEffect, useState } from "react";
import { Routes, Route, matchPath, useLocation } from "react-router-dom";

import "../styles/App.scss";
import EpisodeDetails from "./views/EpisodeDetails.jsx";

function App() {
  const [popularPodcasts, setPopularPodcasts] = useState(
    ls.get("popularPodcastLs", [])
  );

  const [episodes, setEpisodes] = useState(ls.get("podcastEpisodesLs", []));

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

  //Get episodeFound

  const episodeDataPath = matchPath(
    "/podcast/:podcastId/episode/:episodeId",
    pathname
  );

  const episodeId =
    episodeDataPath !== null ? episodeDataPath.params.episodeId : null;

  const episodeFound = episodes.find((episode) => episode.id === episodeId);

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
    <div className="globalContainer">
      <Header />

      <Routes>
        <Route path="/" element={<Home popularPodcasts={popularPodcasts} />} />

        <Route
          path="/podcast/:podcastId"
          element={
            <PodcastDetails podcastFound={podcastFound} episodes={episodes} />
          }
        />

        <Route
          path="/podcast/:podcastId/episode/:episodeId"
          element={<EpisodeDetails episodeFound={episodeFound} />}
        />
      </Routes>
    </div>
  );
}

export default App;
