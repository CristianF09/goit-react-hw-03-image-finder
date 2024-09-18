import React from 'react';
import styles from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ webformatURL, largeImageURL, onClick }) => (
  <li className={styles.galleryItem} onClick={() => onClick(largeImageURL)}>
    <img src={webformatURL} alt="" className={styles.image} />
  </li>
);

export default ImageGalleryItem;