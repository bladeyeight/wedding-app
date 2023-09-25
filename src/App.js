import './App.css';
import Welcome from './components/Welcome';
import RSVP from './components/RSVP';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider, CssBaseline, createTheme } from '@mui/material';


function App() {
  const fancyTheme = createTheme({
    typography: {
      fontFamily: '"Great Vibes"',
    },
  });
  return (
    // <ThemeProvider fancyTheme={fancyTheme}>
    // <CssBaseline />
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/rsvp" element={<RSVP />} />
        </Routes>
      </Router>
    </div>
    // </ThemeProvider>
  );
}

export default App;
