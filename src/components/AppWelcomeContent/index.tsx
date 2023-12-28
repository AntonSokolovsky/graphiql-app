import { Box, Container, Typography } from '@mui/material';
import IconQL from '../../assets/svg/graphql';
import About from './AppTeam';
import { personsTeam } from '../../constants/welcome';
import styles from '../../../src/components/AppWelcomeContent/styled.module.css';

function WelcomeContent() {
  return (
    <Container className={styles.welcome_container} component="main">
      <Box id="about" className={styles.welcome_about} component="section">
        <Box component="div">
          <Typography className={styles.welcome_title} component="h1">
            GraphiQL App
          </Typography>
          <Typography className={styles.welcome_description} component="p">
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
