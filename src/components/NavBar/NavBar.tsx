import { AppBar, Box, Button, IconButton, List, Toolbar } from '@mui/material';
import { NavLink } from 'react-router-dom';
import NavIconQL from '../../assets/svg/graphQl-icon';
import { DarkModeOutlined, LightModeOutlined } from '@mui/icons-material';
import { useState } from 'react';
import { PAGES } from '../../router/pages';
import NavItem from '../NavItem/NavItem';

function NavBar() {
  const [darkMode, setDarkMode] = useState(false);
  function handleModeChange() {
    setDarkMode((prev) => !prev);
  }
  return (
    <AppBar component="nav" position="sticky">
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <NavIconQL />
        <List sx={{ display: 'flex', gap: '10px' }}>
          <NavItem
            name={PAGES.MAIN.name.toUpperCase()}
            path={PAGES.MAIN.path}
          />
          <NavItem
            name={PAGES.WELCOME.name.toUpperCase()}
            path={PAGES.WELCOME.path}
          />
        </List>
        <Box sx={{ display: 'flex', gap: '10px' }}>
          <NavLink to={PAGES.SIGN_IN.path}>
            <Button variant="contained">
              {PAGES.SIGN_IN.name.toUpperCase()}
            </Button>
          </NavLink>
          <NavLink to={PAGES.SIGN_UP.path}>
            <Button variant="contained">
              {PAGES.SIGN_UP.name.toUpperCase()}
            </Button>
          </NavLink>
        </Box>
        <IconButton onClick={handleModeChange}>
          {darkMode ? <LightModeOutlined /> : <DarkModeOutlined />}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
