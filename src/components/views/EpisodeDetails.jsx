import InfoPodcast from "../commons/infoPodcast.jsx";
import Track from "../commons/Track.jsx"


import '../../styles/components/PodcastDetails.scss';

const EpisodeDetails = ({ podcastFound, episodes }) => { 


    return (<div className='episodeDetails'>
   <InfoPodcast podcastFound={podcastFound}/>
   <Track episodes = {episodes}/>
    </div>)
};



export default EpisodeDetails;