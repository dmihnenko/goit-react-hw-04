import css from "../ImageCard/ImageCard.module.css";

export default function ImageCard({
  imageThumbSrc,
  imageFullSrc,
  altText,
  onImageClick,
}) {
  return (
    <img
      src={imageThumbSrc}
      alt={altText}
      className={css.image}
      onClick={() => onImageClick({ imageFullSrc, altText })}
    />
  );
}
