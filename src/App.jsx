import React, { useState, useEffect } from 'react';
import ImageGallery from './components/ImageGallery';
import Loader from './components/Loader';
import Button from './components/Button';
import Searchbar from './components/Searchbar';
import Modal from './components/Modal';
import { fetchImages } from './api';

const App = () => {
  const [images, setImages] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(false);
  const [modalImage, setModalImage] = useState(null);

  useEffect(() => {
    if (searchQuery === '') return;

    const loadImages = async () => {
      setLoading(true);
      try {
        const fetchedImages = await fetchImages(searchQuery, page);
        if (Array.isArray(fetchedImages)) {
          setImages(prevImages => [...prevImages, ...fetchedImages]);
          setHasMore(fetchedImages.length > 0);
        } else {
          setImages([]);
          setHasMore(false);
        }
      } catch (error) {
        console.error('Error fetching images:', error);
      } finally {
        setLoading(false);
      }
    };

    loadImages();
  }, [searchQuery, page]);

  const handleSearchSubmit = query => {
    setSearchQuery(query);
    setImages([]);
    setPage(1);
  };

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  const openModal = (image) => {
    setModalImage(image);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  return (
    <div className="App">
      <Searchbar onSubmit={handleSearchSubmit} />
      <ImageGallery images={images} onImageClick={openModal} />
      {loading && <Loader />}
      {hasMore && !loading && <Button onClick={handleLoadMore} />}
      {modalImage && (
        <Modal
          image={modalImage}
          onClose={closeModal}
        />
      )}
    </div>
  );
};

export default App;