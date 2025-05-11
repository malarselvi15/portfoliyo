import React from 'react';
import { Box, Typography, Grid, Button } from '@mui/material';
import LanguageCard from './LanguageCard';

const languages = [
  {
    name: 'Spanish',
    description: 'Speak fluently with native guidance.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfrW6c9aeFPG9YyEcY1MO58sl6eVGLtIQhJQ&s'
  },
  {
    name: 'French',
    description: 'Master grammar and pronunciation.',
    image: 'https://cdn.easyfrenchmontpellier.com/wp-content/uploads/2019/05/why-learn-french-france.jpg'
  },
  {
    name: 'German',
    description: 'Learn fast through real conversation.',
    image: 'https://thumbs.dreamstime.com/z/writing-note-showing-learn-german-business-photo-showcasing-get-knowledge-skill-speaking-language-concept-176175451.jpg'
  }
];

export default function LanguagesSection() {
  return (
    <Box sx={{ py: 8, px: 4, backgroundColor: '#f8fbff' }}>
      <Typography variant="h4" align="center" sx={{ fontWeight: 'bold', mb: 4 }}>
        Explore Our Language Courses
      </Typography>
      <Typography align="center" sx={{ mb: 5, maxWidth: 600, mx: 'auto', color: 'gray' }}>
        Choose from a variety of engaging, beginner-friendly courses taught by expert instructors to suit your goals.
      </Typography>
      
      {/* New added content */}
      {/* <Typography align="center" sx={{ mb: 5, maxWidth: 800, mx: 'auto', fontSize: '1.1rem', color: 'gray' }}>
        Our courses focus on practical speaking skills, grammar mastery, and cultural immersion to make learning languages fun and effective.
        Start your journey today, whether you're learning for travel, work, or personal enrichment. Each course includes quizzes, practice 
        exercises, and expert feedback to help you progress.
      </Typography> */}

      <Grid container spacing={4} justifyContent="center">
        {languages.map((lang, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <LanguageCard lang={lang} />
          </Grid>
        ))}
      </Grid>

      {/* Add a call-to-action or more features */}
      <Box sx={{ mt: 5, textAlign: 'center' }}>
        <Typography variant="h5" sx={{ mb: 3, fontWeight: 'bold' }}>
          Ready to take the next step in your language journey?
        </Typography>
        <Button variant="contained" size="large" sx={{ padding: '12px 30px', fontSize: '1.1rem' }}>
          Start Learning Today
        </Button>
      </Box>
    </Box>
  );
}
