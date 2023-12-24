import { Box, Container, Stack, Typography } from '@mui/material';
import IconQL from '../../assets/svg/graphql';
import { personsTeam } from '../../constants/welcome';
import TeamMember from '../TeamMember/TeamMember';

function WelcomeContent() {
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '80px',
        padding: '20px 0',
      }}
    >
      <Box
        id="about"
        component="section"
        sx={{
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
            variant="body1"
            color="grey"
            sx={{
              marginTop: '0.5rem',
            }}
          >
            GraphiQL is a playground/IDE for graphQL requests
          </Typography>
        </Box>
        <Box component="div">
          <IconQL />
        </Box>
      </Box>
      <Typography component="h1" variant="h3" color="gray" align={'center'}>
        Our Team
      </Typography>
      <Stack id="team" component="section" spacing={2}>
        {personsTeam.map((person) => (
          <TeamMember key={person.name} data={person} />
        ))}
      </Stack>
    </Container>
  );
}
export default WelcomeContent;
