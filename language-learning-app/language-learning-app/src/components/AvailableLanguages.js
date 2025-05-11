// src/components/AvailableLanguages.js
import React from 'react';
import { Container, Grid, Typography, Card, CardContent, Button } from '@mui/material';

const languages = [
  { name: "Spanish", imageUrl: "https://via.placeholder.com/250" },
  { name: "French", imageUrl: "https://via.placeholder.com/250" },
  { name: "German", imageUrl: "https://via.placeholder.com/250" },
  // Add more languages as needed
];

const AvailableLanguages = () => {
  return (
    <Container style={{ paddingTop: '50px' }}>
      <Typography variant="h4" gutterBottom>
        Available Languages
      </Typography>
      <Grid container spacing={3}>
        {languages.map((language, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <img src={language.imageUrl} alt={language.name} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
              <CardContent>
                <Typography variant="h6">{language.name}</Typography>
                <Button variant="contained" color="primary" size="small" fullWidth>
                  Start Learning
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default AvailableLanguages;
