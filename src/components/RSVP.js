import React, { useState } from 'react';
import ImageCarousel from './ImageCarousel';
import Header from './Header';
import {
    Container, Button, Dialog, DialogTitle, DialogContent,
    TextField, DialogActions
  } from '@mui/material';
import axios from 'axios'; 


function RSVP() {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [open, setOpen] = useState(false);
    const [formData, setFormData] = useState({
      group: [],
      email: '',
      attending: false,
    });

    const handleClickOpen = () => {
        setOpen(true);
      };
    
    const handleClose = () => {
        setOpen(false);
      };

    const handleSubmit = async () => {
        try {
          // backend endpoint
          await axios.post('http://localhost:5000/guests/add', formData);
          console.log('Guest added!');
          setOpen(false);
        } catch (error) {
          console.error('There was an error!', error);
        }
      };

      const handleSearch = async (query) => {
        try {
            // backend endpoint
            const response = await axios.get(`http://localhost:5000/guests/search?q=${query}`);
            setSearchResult(response.data);
            console.log(response.data); // log the results or process them as needed
        } catch (error) {
            console.error('There was an error!', error);
        }
    };

    const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
      };
    return (
        <div>
      <Container style={{ textAlign: 'center' }}>
        <ImageCarousel />
        <Header />
        <Button 
  variant="contained" 
  onClick={handleClickOpen}
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

<Dialog open={open} onClose={() => setOpen(false)}>
          <DialogTitle>RSVP</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              name="search"
              label="Search"
              type="text"
              fullWidth
              value={searchTerm} 
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Button onClick={handleSearch}>Search</Button> 

            {/* Display search results */}
            {searchResult.map((result, index) => (
              <div key={index}>
                <p>{result.group.join(', ')}</p>  
              </div>
            ))}

            <TextField
              autoFocus
              margin="dense"
              name="group"
              label="Group"
              type="text"
              fullWidth
              onChange={handleChange}
            />
            <TextField
              autoFocus
              margin="dense"
              name="allergies"
              label="Allergies"
              type="text"
              fullWidth
              onChange={handleChange}
            />
            <TextField
              autoFocus
              margin="dense"
              name="attending"
              label="Attending"
              type="boolean"
              fullWidth
              onChange={handleChange}
            />
            {/* Add other TextFields for other pieces of data like allergies and attending */}
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleSubmit}>Submit</Button>
          </DialogActions>
        </Dialog>
      </Container>
    </div>
  );
}

export default RSVP;