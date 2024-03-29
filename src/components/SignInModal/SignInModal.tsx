import { Box, Button, Container, TextField, Typography } from '@mui/material';
import { FormEvent, useEffect, useState } from 'react';
import { auth, logInWithEmailAndPassword } from '../../services/auth/firebase';
import { useNavigate } from 'react-router-dom';
import { PAGES } from '../../router/pages';
import { useAuthStore } from '../../store/useAuthStore';

export default function SignInModal() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const isAuth = useAuthStore((state) => state.isAuth);
  const setUser = useAuthStore((state) => state.setUser);
  const navigate = useNavigate();
  useEffect(() => {
    if (isAuth) {
      navigate(PAGES.MAIN.path, { replace: true });
    }
  }, [isAuth, navigate]);

  const handlerSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    logInWithEmailAndPassword(email, password).then(() => {
      if (auth.currentUser) {
        setUser(auth.currentUser);
        navigate(PAGES.MAIN.path, { replace: true });
      }
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
    <Container component="section" maxWidth="xs" data-testid={'sign'}>
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
  );
}
