import React from 'react';
import { Box, Typography, Button, Grid } from '@mui/material';

export default function HeroSection() {
  return (
    <Box sx={{ p: 5, background: '#f5f9ff' }}>
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={6}>
          <Typography variant="h3" sx={{ fontWeight: 'bold' }}>
            Expand Your World Through <span style={{ color: '#1976d2' }}>Language</span>
          </Typography>
          <Typography variant="body1" sx={{ mt: 2 }}>
            Learn to speak confidently with our interactive courses designed for real-world conversations. Start your language journey today!
          </Typography>
          <Box sx={{ mt: 3 }}>
            <Button variant="contained" sx={{ mr: 2 }}>Get Started</Button>
            <Button variant="outlined">Learn More</Button>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <img src="https://source.unsplash.com/featured/?language,learning" alt="Language" style={{ width: '100%', borderRadius: 8 }} />
        </Grid>
      </Grid>
    </Box>
  );
}
