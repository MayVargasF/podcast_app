import InfoPodcast from "../commons/infoPodcast.jsx";
import Track from "../sections/Track.jsx";

import ls from '../../services/localstorage.js';

import '../../styles/components/ViewDetails.scss';


const EpisodeDetails = ({ episodeFound }) => { 
    
    const podcastFound = ls.get('podcastFound');

    return (<div className='viewDetails'>
        <InfoPodcast podcastFound={ podcastFound }/>
        <Track episodeFound={ episodeFound }/>
    </div>)
};

export default EpisodeDetails;