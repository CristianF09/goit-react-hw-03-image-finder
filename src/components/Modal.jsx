import React, { useEffect } from 'react';
import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';
import styles from './Modal.module.css';

const Modal = ({ imageUrl, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  useEffect(() => {
    if (imageUrl) {
      const instance = basicLightbox.create(`
        <img src="${imageUrl}" alt="" class="${styles.modalImage}" />
      `);

      instance.show();

            return () => {
        instance.close();
      };
    }
  }, [imageUrl]);

  return null; // The component itself doesn’t render anything
};

export default Modal;