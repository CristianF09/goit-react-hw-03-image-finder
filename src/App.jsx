import React, { useState, useEffect } from 'react';
import Searchbar from './components/Searchbar/Searchbar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Button from './components/Button/Button';
import Loader from './components/Loader/Loader';
import Modal from './components/Modal/Modal';
import { fetchImages } from './api'; // Make sure to create an api.js file for the API call

const App = () => {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [modalImage, setModalImage] = useState('');
  const [showModal, setShowModal] = useState(false);


const API_KEY = '44945443-a87852da5247dab1dc66b1659';
const BASE_URL = 'https://pixabay.com/api/';

export const fetchImages = async (query, page) => {
  const response = await fetch(`${BASE_URL}?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`);
  const data = await response.json();
  return data.hits;
  };
  
  useEffect(() => {
    if (query) {
      const loadImages = async () => {
        setLoading(true);
        try {
          const fetchedImages = await fetchImages(query, page);
          setImages((prevImages) => [...prevImages, ...fetchedImages]);
        } catch (error) {
          console.error('Error fetching images:', error);
        } finally {
          setLoading(false);
        }
      };

      loadImages();
    }
  }, [query, page]);

  const handleSearchSubmit = (searchQuery) => {
    setQuery(searchQuery);
    setImages([]);
    setPage(1);
  };

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handleImageClick = (imageUrl) => {
    setModalImage(imageUrl);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setModalImage('');
  };

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        fontSize: 20,
        color: '#010101',
        padding: '20px'
      }}
    >
      <Searchbar onSubmit={handleSearchSubmit} />
      <ImageGallery images={images} onImageClick={handleImageClick} />
      {loading && <Loader />}
      {images.length > 0 && !loading && (
        <Button onClick={handleLoadMore} isVisible={true} />
      )}
      {showModal && <Modal imageUrl={modalImage} onClose={handleCloseModal} />}
    </div>
  );
};

export default App;