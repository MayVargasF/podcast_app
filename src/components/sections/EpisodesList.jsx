import { Link } from 'react-router-dom';
import '../../styles/components/EpisodesList.scss';

function EpisodesList() {

  
    // const podcast = popularPodcasts.map((podcast, index) => 
    //  <Link className="link" to={`/podcast/${podcast.id}`} key={index} id={podcast.id} >
    //   <PreviewItem podcast={ podcast } />
    // </Link>)
  
  
    return (
        <section className='episodesList'>
         <h2 className='episodesList__title'>Episodes: 66</h2> 
        <article className='episodesList__episodesContainer'>

            <ul className='episodesList__episodesContainer__header'>
                <li>Title</li>
                <li className='episodesList__episodesContainer__center'>Date</li>
                <li className='episodesList__episodesContainer__center'>Duration</li>
            </ul>
            <ul className='episodesList__episodesContainer__episode'>
                <li><Link to='' className='episodesList__episodesContainer__episode__link'>Título podcast</Link></li>
                <li className='episodesList__episodesContainer__center'>09/09/2021</li>
                <li className='episodesList__episodesContainer__center'>3:56</li>
            </ul>
            
        </article>
      </section>
    );
  }
  
  export default EpisodesList;