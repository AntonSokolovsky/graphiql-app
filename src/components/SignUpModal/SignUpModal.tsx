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

export default function SignUpModal() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const handlerSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      name: formData.get('first name'),
      surname: formData.get('last name'),
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
  const regExpoFirstName = /^[A-ZА-Я]/.test(name);
  const regExpoLastName = /^[A-ZА-Я]/.test(lastName);

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="md">
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            padding: '10px',
            alignItems: 'center',
            gap: '10px',
          }}
        >
          <Typography component="h1">Sign Up</Typography>
          <Box
            component="form"
            onSubmit={handlerSubmit}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
            }}
          >
            <TextField
              id="first name"
              name="first name"
              label="First Name"
              type="text"
              required
              onChange={(e) => setName(e.target.value)}
              helperText="Enter your name"
              error={!(name === '') && !regExpoFirstName}
            />
            <TextField
              id="last name"
              name="last name"
              label="Last Name"
              type="text"
              required
              onChange={(e) => setLastName(e.target.value)}
              helperText="Enter your last name"
              error={!(lastName === '') && !regExpoLastName}
            />
            <TextField
              id="email"
              name="email"
              label="Email"
              type="email"
              required
              onChange={(e) => setEmail(e.target.value)}
              helperText="Enter your email address"
              error={!(email === '') && !regExpoEmail}
            />
            <TextField
              id="password"
              name="password"
              label="Password"
              type={showPassword ? 'text' : 'password'}
              required
              onChange={(e) => setPassword(e.target.value)}
              helperText="The password contains at least 8 characters, one capital letter, one number and one special character"
              error={!(password === '') && !regExpoPassword}
            />
            <Button variant="contained" type="submit">
              Sign Up
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
