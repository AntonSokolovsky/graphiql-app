import { AppBar, Box, Button, IconButton, Link, Toolbar } from '@mui/material';
import { NavLink } from 'react-router-dom';
import NavIconQL from '../../assets/svg/graphQl-icon';
import { DarkModeOutlined, LightModeOutlined } from '@mui/icons-material';
import { useState } from 'react';

function Nav() {
  const [darkMode, setDarkMode] = useState(false);
  function handleModeChange() {
    darkMode ? setDarkMode(false) : setDarkMode(true);
  }
  return (
    <AppBar component="nav" position="static">
      <Toolbar style={{ justifyContent: 'space-between' }}>
        <NavIconQL />
        <Box component="div" style={{ display: 'flex', gap: '10px' }}>
          <Link
            variant="h6"
            href="#"
            sx={{
              color: 'white',
            }}
          >
            Home
          </Link>
          <Link
            variant="h6"
            href="#"
            sx={{
              color: 'white',
            }}
          >
            Team
          </Link>
          <Link
            variant="h6"
            href="#"
            sx={{
              color: 'white',
            }}
          >
            About
          </Link>
        </Box>
        <Box component="div" style={{ display: 'flex', gap: '10px' }}>
          <NavLink to="sign-in">
            <Button variant="contained">Sign In</Button>
          </NavLink>
          <NavLink to="sign-up">
            <Button variant="contained">Sign Up</Button>
          </NavLink>
        </Box>
        <IconButton onClick={handleModeChange}>
          {darkMode ? <LightModeOutlined /> : <DarkModeOutlined />}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default Nav;
