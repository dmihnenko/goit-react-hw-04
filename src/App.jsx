import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import { fetchImages } from "./API/GalleryList-api";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBts";
import toast, { Toaster } from "react-hot-toast";

import ImageModal from "./components/ImageModal/ImageModal";

export default function App() {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [topic, setTopic] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalData, setModalData] = useState({});

  const handleSearch = async (topic) => {
    setImages([]);
    setTopic(topic);
    setPage(1);
  };

  const handleLoadMore = () => {
    setPage(page + 1);
  };
  const handleModalClose = () => {
    setModalIsOpen(!modalIsOpen);
  };

  const handleImageModal = (modalDataFromImageCard) => {
    setModalIsOpen(!modalIsOpen);
    setModalData(modalDataFromImageCard);
  };

  useEffect(() => {
    if (topic === "") {
      return;
    }

    async function getImages() {
      try {
        setLoading(true);
        setError(false);
        setTopic(topic);
        const data = await fetchImages(topic, page);
        setImages((prevState) => {
          return [...prevState, ...data];
        });
      } catch (error) {
        toast.error("Something went wrong reload page");
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    getImages();
  }, [topic, page]);

  return (
    <div>
      <SearchBar onSubmit={handleSearch} />
      {loading && <p>Loading Page</p>}
      {error && <p>Error, please reaload page</p>}
      {images.length > 0 && (
        <ImageGallery data={images} onImageClick={handleImageModal} />
      )}
      {topic !== "" && <LoadMoreBtn onClick={handleLoadMore} />}
      <ImageModal
        isModalOpen={modalIsOpen}
        modalData={modalData}
        onModalClose={handleModalClose}
      />
      <Toaster />
    </div>
  );
}
