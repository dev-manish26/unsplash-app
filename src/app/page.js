// src/pages/index.js
import React from 'react';
import styles from './page.module.css';
import Search from '../components/Search';

const Home = () => {
  return (
    <div className="container">
      <h1 className={styles.title}>Image Search App</h1>
      <Search />
    </div>
  );
};

export default Home;
