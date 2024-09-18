import React from 'react';
import { Oval } from 'react-loader-spinner'; // Import spinner component
import styles from './Loader.module.css'; // Import CSS module

const Loader = () => {
  return (
    <div className={styles.loader}>
      <Oval
        height={80}
        width={80}
        color="#3f51b5"
        secondaryColor="#f3f3f3"
        strokeWidth={5}
        strokeWidthSecondary={5}
      />
    </div>
  );
};

export default Loader;