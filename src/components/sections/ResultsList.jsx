import PreviewItem from "./PreviewItem";
import "../styles/components/ResultsList.scss";

import { Link } from 'react-router-dom';


function ResultsList({ popularPodcasts, fetchEpisodes }) {

  
  const podcast = popularPodcasts.map((podcast, index) => 
   <Link className="link" to={`/podcast/${podcast.id}`} key={index} id={podcast.id} >
    <PreviewItem podcast={ podcast } />
  </Link>)


  return (
    <ul className="resultList">
      { podcast }
    </ul>
  );
}

export default ResultsList;
