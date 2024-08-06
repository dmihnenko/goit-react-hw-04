import ImageCard from "../ImageCard/ImageCard";
import css from "../ImageGallery/ImageGallery.module.css";

export default function ImageGallery({ data, onImageClick }) {
  return (
    <div className={css.images}>
      {data.map((image) => (
        <div key={image.id}>
          <ImageCard
            key={image.id}
            imageThumbSrc={image.urls.small}
            imageFullSrc={image.urls.regular}
            altText={image.alt_description}
            onImageClick={onImageClick}
          />
        </div>
      ))}
    </div>
  );
}
