import img from '../images/placeholder_img.jpg';
import "../styles/components/PreviewItem.scss";


const PreviewItem = (props) => {
return (<li className='previewItem'>
        <div className="previewItem__imgContainer">
            <img className='previewItem__imgContainer--img' src={img} alt='Podcast cover' title='Podcast cover'/>
        </div>
        <h2 className='previewItem__title'>Podcast title</h2>
        <p className='previewItem__author'>Author</p>
    </li>)
};

export default PreviewItem;