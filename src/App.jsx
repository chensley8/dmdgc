import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TemporaryDrawer from './components/Navigation';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

// Placeholder components for your routes
const Home = () => <Typography variant="h4">Home Page</Typography>;
const Events = () => <Typography variant="h4">Events Page</Typography>;
const Results = () => <Typography variant="h4">Results Page</Typography>;
const Courses = () => <Typography variant="h4">Courses Page</Typography>;
const Contact = () => <Typography variant="h4">Contact Page</Typography>;
const AdminLogin = () => <Typography variant="h4">Admin Login Page</Typography>;

function App() {
  return (
    <BrowserRouter>
      <Box sx={{ flexGrow: 1 }}>
        <TemporaryDrawer />
        <Box sx={{ p: 3 }}>
          <Routes>
            <Route path="/" element={
              <>
                <Typography variant="h4" component="h1" gutterBottom>
                  Welcome to the Home Page
                </Typography>
                <Typography variant="body1">
                  This is a temporary home page. Navigate using the menu to explore different sections.
                </Typography>
              </>
            } />
            <Route path="/home" element={<Home />} />
            <Route path="/events" element={<Events />} />
            <Route path="/results" element={<Results />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/admin-login" element={<AdminLogin />} />
          </Routes>
        </Box>
      </Box>
    </BrowserRouter>
  );
}

export default App;
