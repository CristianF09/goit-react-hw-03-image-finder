import React from 'react';
import ImageGalleryItem from './ImageGalleryItem';
import styles from './ImageGallery.module.css'; // Import CSS module

const ImageGallery = ({ images, onImageClick }) => {
  return (
    <ul className={styles.gallery}>
      {images.map(image => (
        <ImageGalleryItem 
          key={image.id} 
          image={image} 
          onClick={onImageClick} 
        />
      ))}
    </ul>
  );
};

export default ImageGallery;