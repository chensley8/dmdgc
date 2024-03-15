import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">
          Devil Mountain Disc Golf Club
        </Typography>
        {/* Add additional navigation items or logo here */}
      </Toolbar>
    </AppBar>
  );
};

export default Header;