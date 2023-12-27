import { AppBar, Box, Button, Link, Toolbar } from '@mui/material';
import { NavLink } from 'react-router-dom';
import NavIconQL from '../../assets/svg/graphQl-icon';
import styles from '../../../src/components/AppBar/styled.module.css';

function Nav() {
  const token = false;
  return (
    <AppBar component="nav" position="static">
      <Toolbar className={styles.nav_container}>
        <NavIconQL />
        <Box className={styles.wrapper} component="div">
          <Link className={styles.nav_link} href="#">
            Home
          </Link>
          <Link className={styles.nav_link} href="#">
            Team
          </Link>
          <Link className={styles.nav_link} href="#">
            About
          </Link>
        </Box>
        <Box className={styles.wrapper} component="div">
          {token ? (
            <NavLink to="sign-in">
              <Button variant="contained">Main Page</Button>
            </NavLink>
          ) : (
            <>
              <NavLink to="sign-in">
                <Button variant="contained">Sign In</Button>
              </NavLink>
              <NavLink to="sign-up">
                <Button variant="contained">Sign Up</Button>
              </NavLink>
            </>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Nav;
