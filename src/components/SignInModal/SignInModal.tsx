import * as React from 'react';
import {
  Box,
  Button,
  Container,
  TextField,
  ThemeProvider,
  Typography,
  createTheme,
} from '@mui/material';
import { FormEvent, useState } from 'react';

const defaultTheme = createTheme();

export default function SignInModal() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const handlerSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      email: formData.get('email'),
      password: formData.get('password'),
    });
  };

  const regExpoEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(
    email
  );
  const regExpoPassword =
    /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/.test(
      password
    );

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            padding: '10px',
            alignItems: 'center',
            gap: '10px',
          }}
        >
          <Typography component="h1">Sign In</Typography>
          <Box component="form" onSubmit={handlerSubmit}>
            <TextField
              onChange={(e) => setEmail(e.target.value)}
              helperText="Enter your email address"
              id="email"
              name="email"
              label="Email"
              type="email"
              required
              error={!(email === '') && !regExpoEmail}
            />
            <TextField
              onChange={(e) => setPassword(e.target.value)}
              helperText="The password contains at least 8 characters, one capital letter, one number and one special character"
              id="password"
              name="password"
              label="Password"
              type={showPassword ? 'text' : 'password'}
              required
              error={!(password === '') && !regExpoPassword}
            />
            <Button variant="contained" type="submit">
              Sign In
            </Button>
            <Button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
            >
              Show password
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
