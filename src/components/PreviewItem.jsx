//import img from '../images/placeholder_img.jpg';
import "../styles/components/PreviewItem.scss";

const PreviewItem = ({ podcast }) => {
return (<li className='previewItem'>
        <div className="previewItem__imgContainer">
            <img className='previewItem__imgContainer--img' src={podcast.image} alt='Podcast cover' title='Podcast cover'/>
        </div>
       
        <h2 className='previewItem__title'>{podcast.title}</h2>
     
        <p className='previewItem__author'>Author: {podcast.author}</p>
    </li>)
};

export default PreviewItem;