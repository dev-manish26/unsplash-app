// src/components/Search.js
'use client';

import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import ImageList from './ImageList';
import unsplash from '../utils/unsplash';
import styles from '../app/page.module.css';

const Search = () => {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);

  const handleSearch = async () => {
    try {
      const result = await unsplash.search.getPhotos({ query });
      setImages(result.response.results);
    } catch (error) {
      console.error('Error fetching images:', error);
    }
  };

  return (
    <div>
      <div className={styles.searchContainer}>
        <TextField
          label="Search for images"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          variant="outlined"
          fullWidth
        />
        <Button onClick={handleSearch} variant="contained" color="primary">
          Search
        </Button>
      </div>
      <div className={styles.imageGrid}>
        {images.map((image) => (
          <ImageList key={image.id} image={image} />
        ))}
      </div>
    </div>
  );
};

export default Search;
