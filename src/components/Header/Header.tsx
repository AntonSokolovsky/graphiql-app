import { LoginOutlined } from '@mui/icons-material';
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';

export default function Header() {
  return (
    <AppBar>
      <Toolbar>
        <Typography>GraphiQL App</Typography>
        <IconButton>
          <LoginOutlined></LoginOutlined>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
