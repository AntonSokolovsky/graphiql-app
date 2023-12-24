import { Box, Container, Typography } from '@mui/material';
import IconQL from '../../assets/svg/graphql';
import { personsTeam } from '../../constants/welcome';
import About from '../About/About';

function WelcomeContent() {
  return (
    <Container
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
          <Typography component="h1" variant="h4">
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