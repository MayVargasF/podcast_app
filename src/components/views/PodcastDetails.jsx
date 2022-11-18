import InfoPodcast from "../commons/infoPodcast.jsx";
import EpisodesList from "../sections/EpisodesList.jsx";

import "../../styles/components/ViewDetails.scss";

const PodcastDetails = ({ podcastFound, episodes, loadingUpdate }) => {
  return (
    <div className="viewDetails">
      <InfoPodcast podcastFound={podcastFound} />
      <EpisodesList episodes={episodes} loadingUpdate={loadingUpdate} />
    </div>
  );
};

export default PodcastDetails;
