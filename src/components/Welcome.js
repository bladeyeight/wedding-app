import React from 'react';
import {Box, Typography, Button} from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Welcome() {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate('/rsvp');
  };

    return (
    <Box 
      sx={{
        display: 'flex',
        flexDirection: 'column', // Added this to make the content and button stack vertically
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh', 
        gap: 2, // Gap between the text and button
      }}
    >
      <Typography 
      sx={{
         fontFamily: 'Great Vibes', 
         fontSize: '70px',
         position: 'relative',
         '&::before': {
          content: '""', 
          display: 'block',
          width: '1.7em',
          height: '1.7em', 
          background: 'url(/png/flourish1.png) no-repeat',
          backgroundSize: 'contain',
          position: 'absolute',
          top: '50%',
          transform: 'translateY(-90%) rotate(180deg)', // Added rotation to flip the SVG
          left: '-2em',
        },
         '&::after': {
           content: '""',
           display: 'block',
           width: '1.7em',
           height: '1.7em',
           background: 'url(/png/flower.png) no-repeat',
           backgroundSize: 'contain',
           position: 'absolute',
           top: '50%',
           transform: 'translateY(-23%)',
           right: '-2em',
         }
         }}>Alice & Sam
         </Typography>
         <Button 
  variant="contained" 
  sx={{ 
    backgroundColor: 'black', 
    color: 'white', 
    '&:hover': {
      backgroundColor: '#333',  // Darker shade for hover effect
    }
  }}
  onClick={handleNavigation}
>
  Enter
</Button>
    </Box>

  );
}
export default Welcome;