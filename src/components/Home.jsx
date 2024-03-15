import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Home = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Welcome to the Home Page
      </Typography>
      <Typography variant="body1">
        This is a temporary home page. Navigate using the menu to explore different sections.
      </Typography>
    </Box>
  );
};

export default Home;