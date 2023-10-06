import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container } from '@mui/material';

const Header = () => {
  return (
    <Container style={{
      display: 'flex', 
      justifyContent: 'space-between', // spread the buttons out
      marginTop: '-45px',  // move the header up
      width: '60%',  // adjust the container width
    }}>
      <Button color="inherit">
        <Link to="/information" style={{ textDecoration: 'none', color: 'inherit' }}>
          Information
        </Link>
      </Button>
      
      <Button color="inherit">
        <Link to="/our-story" style={{ textDecoration: 'none', color: 'inherit' }}>
          Our Story
        </Link>
      </Button>
      
      <Button color="inherit">
        <Link to="/rsvp" style={{ textDecoration: 'none', color: 'inherit' }}>
          RSVP
        </Link>
      </Button>
      
      <Button color="inherit">
        <Link to="/our-cat" style={{ textDecoration: 'none', color: 'inherit' }}>
          Our Cat
        </Link>
      </Button>
    </Container>
  );
};

export default Header;
