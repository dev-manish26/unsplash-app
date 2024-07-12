import React from 'react';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';

const ImageList = ({ image }) => {
  return (
    <Card>
      <CardMedia
        component="img"
        height="200"
        image={image.urls.small}
        alt={image.alt_description}
      />
      <CardContent>
        <Typography variant="body1" component="p">
          Author: {image.user.name}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Likes: {image.likes}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Description: {image.alt_description || 'N/A'}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ImageList;
