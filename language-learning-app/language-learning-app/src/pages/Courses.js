import React from 'react';
import { Box, Typography, Grid, Card, CardContent, CardActions, Button, Avatar, List, ListItem } from '@mui/material';
import LanguageIcon from '@mui/icons-material/Language';
import SchoolIcon from '@mui/icons-material/School';
import ForumIcon from '@mui/icons-material/Forum';

const courses = [
  {
    title: 'Beginner Spanish Course',
    description: 'Learn the basics of Spanish grammar and vocabulary. Perfect for beginners.',
    icon: <LanguageIcon />,
    image: 'https://iifls.com/wp-content/uploads/2020/04/Spanish-Classes-in-Bangalore-Best-Language-Institute.jpg',
    link: '#', // Link to detailed course page or signup
  },
  {
    title: 'French Grammar Mastery',
    description: 'Dive into French grammar, perfect for those who want to build a strong foundation.',
    icon: <SchoolIcon />,
    image: 'https://courses.iid.org.in/public//uploads/media_manager/690.png',
    link: '#', // Link to detailed course page or signup
  },
  {
    title: 'Conversational German',
    description: 'Master basic conversational German for everyday use and travel.',
    icon: <ForumIcon />,
    image: 'https://cdn.fs.teachablecdn.com/RNFsIItAS7acFcM4W4M5',
    link: '#', // Link to detailed course page or signup
  },
];

export default function Courses() {
  return (
    <Box sx={{ p: 5, background: 'linear-gradient(to right, #f8fbff, #eef3f8)', minHeight: '100vh' }}>
      <Typography variant="h3" align="center" gutterBottom sx={{ fontWeight: 'bold' }}>
        Explore Our Courses
      </Typography>
      <Typography variant="subtitle1" align="center" sx={{ mb: 5, color: 'gray' }}>
        Interactive courses taught by expert instructors to help you master new languages.
      </Typography>

      {/* Courses Grid */}
      <Grid container spacing={4} justifyContent="center">
        {courses.map((course, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ maxWidth: 345, boxShadow: 3, borderRadius: 4, transition: '0.3s', '&:hover': { boxShadow: 6 } }}>
              <CardContent>
                {/* Course Image */}
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                  <Avatar variant="square" src={course.image} alt={course.title} sx={{ width: 150, height: 150, mb: 2 }} />
                </Box>
                <Typography variant="h5" gutterBottom align="center">{course.title}</Typography>
                <Typography variant="body2" color="text.secondary" align="center">
                  {course.description}
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: 'center' }}>
                <Button variant="contained" color="primary" href={course.link} size="small">
                  Start Course
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Additional Section for Course Benefits */}
      <Box sx={{ mt: 5, textAlign: 'center' }}>
        <Typography variant="h5" gutterBottom>
          Why Choose Our Courses?
        </Typography>
        <List sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
          <ListItem sx={{ width: '30%', justifyContent: 'center' }}>
            <Typography variant="body2" sx={{ fontWeight: 'bold', mr: 1 }}>Expert Instructors</Typography>
            <Typography variant="body2">Learn from professionals with years of experience.</Typography>
          </ListItem>
          <ListItem sx={{ width: '30%', justifyContent: 'center' }}>
            <Typography variant="body2" sx={{ fontWeight: 'bold', mr: 1 }}>Interactive Content</Typography>
            <Typography variant="body2">Engaging exercises and quizzes to test your progress.</Typography>
          </ListItem>
          <ListItem sx={{ width: '30%', justifyContent: 'center' }}>
            <Typography variant="body2" sx={{ fontWeight: 'bold', mr: 1 }}>Flexible Learning</Typography>
            <Typography variant="body2">Learn at your own pace, anytime, anywhere.</Typography>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
}
