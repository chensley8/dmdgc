import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Courses = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Courses
      </Typography>
      <Typography variant="h6" component="h1" gutterBottom>
        Walden
      </Typography>
      <Typography variant="body1">
        info about walden
      </Typography>
      <Typography variant="h6" component="h1" gutterBottom>
        Hillcrest
      </Typography>
      <Typography variant="body1">
        info about hillcrest
      </Typography>
    </Box>
  );
};

export default Courses;