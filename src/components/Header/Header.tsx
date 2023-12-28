import { Box } from '@mui/material';
import Nav from '../NavBar/NavBar';

export default function Header() {
  return (
    <>
      <Box component={'header'} position="sticky">
        <Nav />
      </Box>
    </>
  );
}
