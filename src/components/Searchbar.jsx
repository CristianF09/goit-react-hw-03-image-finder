import React, { useState } from 'react';
import styles from './Searchbar.module.css';

const Searchbar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleChange = e => setQuery(e.target.value);

  const handleSubmit = e => {
    e.preventDefault();
    if (query.trim() === '') return;
    onSubmit(query);
    setQuery(''); 
  };

  return (
    <header className={styles.searchbar}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <button type="submit" className={styles.button}>
          <i className="fa fa-search"></i>
        </button>
        <input
          className={styles.input}
          type="text"
          value={query}
          onChange={handleChange}
          placeholder="Search images..."
        />
      </form>
    </header>
  );
};

export default Searchbar;