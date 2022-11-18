import "../../styles/components/PreviewItem.scss";

const PreviewItem = ({ podcast }) => {
  const title = podcast.title.split("-");

  return (
    <li className="previewItem">
      <div className="previewItem__imgContainer">
        <img
          className="previewItem__imgContainer--img"
          src={podcast.image}
          alt="Podcast cover"
          title="Podcast cover"
        />
      </div>

      <h2 className="previewItem__title">{title[0]}</h2>

      <p className="previewItem__author">Author: {podcast.author}</p>
    </li>
  );
};

export default PreviewItem;
