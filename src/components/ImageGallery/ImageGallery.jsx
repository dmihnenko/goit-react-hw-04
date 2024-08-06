import ImageCard from "../ImageCard/ImageCard";
import css from "../ImageGallery/ImageGallery.module.css";

export default function ImageGallery({ data, onImageClick }) {
  return (
    <ul className={css.images}>
      {data.map((image) => (
        <li key={image.id}>
          <ImageCard
            key={image.id}
            imageThumbSrc={image.urls.small}
            imageFullSrc={image.urls.regular}
            altText={image.alt_description}
            onImageClick={onImageClick}
          />
        </li>
      ))}
    </ul>
  );
}
