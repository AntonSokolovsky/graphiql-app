import { Button } from '@mui/material';
import { Link, Outlet } from 'react-router-dom';

function Welcome() {
  return (
    <>
      <div>Welcome</div>

      <Link to="sign-in">
        <Button variant="contained">Sign In</Button>
      </Link>
      <Link to="sign-up">
        <Button variant="contained">Sign Up</Button>
      </Link>

      <Outlet />
    </>
  );
}

export default Welcome;
