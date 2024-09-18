import React, { useState, useEffect } from 'react';
import { fetchImages } from './api';
import Button from './components/Button';
import Loader from './components/Loader';
import ImageGallery from './components/ImageGallery';

const App = () => {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    const loadImages = async () => {
      setLoading(true);
      try {
        const newImages = await fetchImages('cat', page);

        
        if (Array.isArray(newImages) && newImages.length > 0) {
          setImages(prevImages => [...prevImages, ...newImages]);
          setHasMore(true);
        } else {
          setHasMore(false); 
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    loadImages();
  }, [page]);

  const loadMoreImages = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <div>
      <ImageGallery images={images} />
      {loading && <Loader />} 
      {images.length > 0 && !loading && hasMore && (
        <Button onClick={loadMoreImages} visible={true} />
      )}
    </div>
  );
};

export default App;