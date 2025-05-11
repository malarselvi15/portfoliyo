import React from 'react';
import { useParams } from 'react-router-dom';
import {
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  CardMedia
} from '@mui/material';

export default function LanguageDetails() {
  const { name } = useParams();
  const language = name.charAt(0).toUpperCase() + name.slice(1);

  return (
    <Box sx={{ p: 5, backgroundColor: '#f4f6f8', minHeight: '100vh' }}>
      <Card sx={{ maxWidth: 900, mx: 'auto', p: 2, borderRadius: 4 }}>
        <CardMedia
          component="img"
          height="300"
          image="https://d502jbuhuh9wk.cloudfront.net/articles/64b7b98ae4b021efeeba4965/seRzZfreeonlineclass.jpg"
          alt={`${language} course`}
          sx={{ borderRadius: 2, objectFit: 'cover' }}
        />
        <CardContent>
          <Typography variant="h4" gutterBottom>
            Welcome to the {language} Course!
          </Typography>
          <Typography variant="body1" sx={{ mb: 3 }}>
            Our {language} course offers a complete journey from beginner to advanced. Learn through interactive lessons, videos, real-life conversations, and cultural insights.
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary', mb: 3 }}>
            Perfect for students, travelers, or professionals who want to boost their language skills.
          </Typography>
          <Button variant="contained" color="primary" size="large">
            Start Learning
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
}
