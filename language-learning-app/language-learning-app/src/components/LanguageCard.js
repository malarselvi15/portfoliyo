import React from 'react';
import { Card, CardContent, Typography, CardMedia, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function LanguageCard({ lang }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/language/${lang.name.toLowerCase()}`);
  };

  return (
    <Card sx={{ height: '100%', boxShadow: 3, borderRadius: 3 }}>
      <CardMedia
        component="img"
        height="160"
        image={lang.image}
        alt={`${lang.name} flag`}
      />
      <CardContent>
        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
          {lang.name}
        </Typography>
        <Typography sx={{ mt: 1, mb: 2, color: 'gray' }}>
          {lang.description}
        </Typography>
        <Box textAlign="center">
          <Button variant="contained" onClick={handleClick}>View Course</Button>
        </Box>
      </CardContent>
    </Card>
  );
}
