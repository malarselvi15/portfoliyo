import React from 'react';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Avatar,
  CardMedia
} from '@mui/material';
import LanguageIcon from '@mui/icons-material/Language';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import GroupIcon from '@mui/icons-material/Group';

export default function About() {
  return (
    <Box sx={{ p: 5, background: '#f2f6fc', minHeight: '100vh' }}>
      {/* Title */}
      <Typography variant="h3" align="center" gutterBottom sx={{ fontWeight: 'bold', color: '#2c3e50' }}>
        About LinguaLearn
      </Typography>
      <Typography variant="h6" align="center" sx={{ color: '#7f8c8d', mb: 4 }}>
        A modern platform for immersive language learning experiences.
      </Typography>

      {/* Who We Are Section */}
      <Grid container spacing={4} alignItems="center" justifyContent="center" sx={{ mb: 6 }}>
        <Grid item xs={12} md={6}>
          <CardMedia
            component="img"
            image="https://images.unsplash.com/photo-1607746882042-944635dfe10e"
            alt="Language Learning"
            sx={{
              width: '100%',
              maxWidth: 450,
              borderRadius: 4,
              display: 'block',
              mx: 'auto'
            }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h5" sx={{ mb: 2 }}>Who We Are</Typography>
          <Typography variant="body1" sx={{ color: '#555', mb: 2 }}>
            LinguaLearn is an innovative language learning platform built by educators, linguists, and technologists who share a deep passion for communication. We believe that language is more than grammar—it's culture, community, and connection.
          </Typography>
          <Typography variant="body1" sx={{ color: '#555' }}>
            Our courses are designed to help learners develop real-world fluency through interactive content, AI-driven practice, and human mentorship. Whether you're preparing for travel, career advancement, or cultural exploration, LinguaLearn gives you the tools to succeed.
          </Typography>
        </Grid>
      </Grid>

      {/* Features Section */}
      <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: 'bold', mb: 4 }}>
        What Makes Us Unique
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {[{
          icon: <LanguageIcon />,
          title: 'Native Instructors',
          text: 'Learn directly from passionate native speakers across the globe.',
          color: '#3f51b5'
        }, {
          icon: <EmojiObjectsIcon />,
          title: 'Interactive Learning',
          text: 'Games, quizzes, and speaking challenges make learning engaging.',
          color: '#ff9800'
        }, {
          icon: <GroupIcon />,
          title: 'Global Community',
          text: 'Practice with learners worldwide and share your journey.',
          color: '#4caf50'
        }].map((feature, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ textAlign: 'center', p: 3, borderRadius: 4 }}>
              <Avatar sx={{ bgcolor: feature.color, mx: 'auto', mb: 2 }}>{feature.icon}</Avatar>
              <CardContent>
                <Typography variant="h6" gutterBottom>{feature.title}</Typography>
                <Typography variant="body2">{feature.text}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Team Section */}
      <Box sx={{ mt: 8 }}>
        <Typography variant="h4" gutterBottom align="center" sx={{ fontWeight: 'bold' }}>
          Meet the Team
        </Typography>
        <Grid container spacing={4} justifyContent="center" sx={{ mt: 2 }}>
          {[{
            name: "Sofia Mendez",
            role: "Spanish Course Director",
            img: "https://randomuser.me/api/portraits/women/50.jpg"
          }, {
            name: "Pierre Dupont",
            role: "French Language Coach",
            img: "https://randomuser.me/api/portraits/men/32.jpg"
          }, {
            name: "Greta Schäfer",
            role: "German Content Lead",
            img: "https://randomuser.me/api/portraits/women/65.jpg"
          }].map((member, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card sx={{ textAlign: 'center', p: 3, borderRadius: 4 }}>
                <Avatar 
                  src={member.img} 
                  sx={{ width: 80, height: 80, mx: 'auto', mb: 2 }} 
                />
                <CardContent>
                  <Typography variant="h6">{member.name}</Typography>
                  <Typography variant="body2" color="text.secondary">{member.role}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
