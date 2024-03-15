import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TemporaryDrawer from './components/Navigation';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Home from './components/Home'
import Courses from './components/Courses';
import Footer from './components/Footer';
import Header from './components/Header';

// Placeholder components for your routes
const Events = () => <Typography variant="h4">Events Page</Typography>;
const Results = () => <Typography variant="h4">Results Page</Typography>;
const Contact = () => <Typography variant="h4">Contact Page</Typography>;
const AdminLogin = () => <Typography variant="h4">Admin Login Page</Typography>;

function App() {
  return (
    <BrowserRouter>
      <Box sx={{ flexGrow: 1 }}>
        <Header />
        <TemporaryDrawer />
        <Box sx={{ p: 3 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/events" element={<Events />} />
            <Route path="/results" element={<Results />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/admin-login" element={<AdminLogin />} />
          </Routes>
        </Box>
        <Footer />
      </Box>
    </BrowserRouter>
  );
}

export default App;
