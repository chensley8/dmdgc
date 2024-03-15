import React from 'react';
import { Box, Typography, Container } from '@mui/material';

const Footer = () => {
  return (
    <Box component="footer" sx={{ bgcolor: 'background.paper', py: 6 }}>
      <Container maxWidth="lg">
        <Typography variant="subtitle1" align="center" color="text.secondary" component="p">
          © 2024 DMDGC
        </Typography>
        {/* Add additional footer content here */}
      </Container>
    </Box>
  );
};

export default Footer;