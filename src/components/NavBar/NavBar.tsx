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
            href="#"
            style={{
              color: 'white',
              textDecoration: 'none',
              fontFamily: 'Roboto,Helvetica,Arial,sans-serif',
              fontWeight: '500',
              fontSize: '1.25rem',
              lineHeight: '1.6',
              letterSpacing: '0.0075em',
            }}
          >
            Home
          </Link>
          <Link
            href="#"
            style={{
              color: 'white',
              textDecoration: 'none',
              fontFamily: 'Roboto,Helvetica,Arial,sans-serif',
              fontWeight: '500',
              fontSize: '1.25rem',
              lineHeight: '1.6',
              letterSpacing: '0.0075em',
            }}
          >
            Team
          </Link>
          <Link
            href="#"
            style={{
              color: 'white',
              textDecoration: 'none',
              fontFamily: 'Roboto,Helvetica,Arial,sans-serif',
              fontWeight: '500',
              fontSize: '1.25rem',
              lineHeight: '1.6',
              letterSpacing: '0.0075em',
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
