import ImageCarousel from './ImageCarousel';
import Header from './Header';
import { Container, Button } from '@mui/material';

function RSVP() {
    return (
        <div>
      <Container style={{ textAlign: 'center' }}>
        <ImageCarousel />
        <Header />
        <Button 
  variant="contained" 
  sx={{ 
    backgroundColor: 'black', 
    color: 'white', 
    width: '300px',
    marginTop: '90px',
    '&:hover': {
      backgroundColor: '#333',  // Darker shade for hover effect
    }
  }}
>
  RSVP
</Button>
      </Container>
        </div>
    );
}

export default RSVP;