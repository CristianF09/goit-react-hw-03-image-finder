import React from 'react';
import styles from './ImageGalleryItem.module.css'; // Import CSS module

const ImageGalleryItem = ({ image, onClick }) => {
  return (
    <li className={styles.galleryItem} onClick={() => onClick(image.largeImageURL)}>
      <img src={image.webformatURL} alt="" className={styles.image} />
    </li>
  );
};

export default ImageGalleryItem;