import React from 'react';
import { AppBar, Toolbar, Typography, Button, Select, MenuItem } from '@mui/material';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <AppBar position="static" color="default">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 'bold' }}>
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>🌍 LinguaLearn</Link>
        </Typography>
        <Button component={Link} to="/">Home</Button>
        <Button component={Link} to="/courses">Courses</Button>
        <Button component={Link} to="/about">About</Button>
        <Select defaultValue="EN" variant="standard">
          <MenuItem value="EN">English</MenuItem>
          <MenuItem value="FR">French</MenuItem>
        </Select>
      </Toolbar>
    </AppBar>
  );
}
