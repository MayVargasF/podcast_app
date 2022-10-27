import { Link } from 'react-router-dom';

function EpisodesList() {

  
    // const podcast = popularPodcasts.map((podcast, index) => 
    //  <Link className="link" to={`/podcast/${podcast.id}`} key={index} id={podcast.id} >
    //   <PreviewItem podcast={ podcast } />
    // </Link>)
  
  
    return (
        <section>
            
            <table>
    <caption>Episodes: 99</caption>
    <thead>
    <tr>
        <th scope="col">Title</th>
        <th scope="col">Date</th>
        <th scope="col">Duration</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <th scope="row">Episodio 1</th>
        <td>01/12/2021</td>
        <td>14:00</td>
    </tr>
    </tbody>
   
</table>
      </section>
    );
  }
  
  export default EpisodesList;