import { Box, Container, Typography } from '@mui/material';
import IconQL from '../../assets/svg/graphql';
import About from './AppTeam';
import { personsTeam } from '../../constants/welcome';

function WelcomeContent() {
  return (
    <Container
      component="main"
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '80px',
        padding: '20px 0',
      }}
    >
      <Box
        id="about"
        component="section"
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
        }}
      >
        <Box component="div">
          <Typography
            component="h1"
            style={{
              fontFamily: 'Roboto, sans-serif',
              fontSize: '2rem',
              color: '#2c3849',
              fontWeight: 700,
              lineHeight: 1,
            }}
          >
            GraphiQL App
          </Typography>
          <Typography
            component="p"
            style={{
              fontFamily: 'Roboto, sans-serif',
              color: '#8d8d8d',
              marginTop: '8px',
            }}
          >
            GraphiQL is a playground/IDE for graphQL requests
          </Typography>
        </Box>
        <Box component="div">
          <IconQL />
        </Box>
      </Box>
      <Box id="team" component="section">
        {personsTeam.map((person) => (
          <About key={person.name} data={person} />
        ))}
      </Box>
    </Container>
  );
}
export default WelcomeContent;
