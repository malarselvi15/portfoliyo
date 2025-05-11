// src/components/LandingPage.js
import React from 'react';
import { Button, Container, Typography, Grid } from '@mui/material';

const LandingPage = () => {
  return (
    <Container style={{ paddingTop: '50px' }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Typography variant="h3" style={{ fontWeight: 'bold', color: '#3f51b5' }} gutterBottom>
            Expand Your World Through Language
          </Typography>
          <Typography variant="h6" paragraph>
            Learn to speak confidently with our interactive courses designed for real-world conversations.
            Start your language journey today!
          </Typography>
          <Button variant="contained" color="primary" size="large" style={{ marginRight: '15px' }}>
            Get Started
          </Button>
          <Button variant="outlined" color="primary" size="large">
            Learn More
          </Button>
        </Grid>
        <Grid item xs={12} md={6}>
          <img src="https://via.placeholder.com/500" alt="Learning" style={{ width: '100%', borderRadius: '10px' }} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default LandingPage;
