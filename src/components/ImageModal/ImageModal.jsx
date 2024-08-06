import ReactModal from "react-modal";
import css from "./ImageModal.module.css";
ReactModal.setAppElement("#root");
export default function ImageModal({
  modalData: { imageFullSrc, altText },
  isModalOpen,
  onModalClose,
}) {
  return (
    <ReactModal
      isOpen={isModalOpen}
      onRequestClose={onModalClose}
      shouldCloseOnOverlayClick={true}
      className={css.imageModal}
      overlayClassName={css.imageModal__overlay}
    >
      <img className={css.imageModal__image} src={imageFullSrc} alt={altText} />
    </ReactModal>
  );
}
