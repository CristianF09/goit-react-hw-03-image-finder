import React from 'react';
import styles from './Button.module.css'; // Import CSS module

const Button = ({ onClick }) => {
  return (
    <button type="button" className={styles.button} onClick={onClick}>
      Load more
    </button>
  );
};

export default Button;