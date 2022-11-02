import '../../styles/components/Track.scss';

const Track = ({ episodes }) => { 

//Traer datos de EpisodeFound (cambiar prop) y terminar de dar estilos. 

    return (<section className='track'>
        <h2 className='track__title'>Título episodio</h2>
        <p className='track__description'>Descripción episodio</p>
        <audio controls>
         <source className='track__audio' src={episodes.track} type='audio/mpeg'></source>
        </audio>
    </section>)
};


export default Track;