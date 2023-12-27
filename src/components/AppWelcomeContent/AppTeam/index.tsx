import { Box, Link, Typography } from '@mui/material';
import { IPersonTeam } from '../../../interface';
import GitHubIcon from '../../../assets/svg/github-icon';
import styles from '../../../../src/components/AppWelcomeContent/AppTeam/styled.module.css';

type Props = {
  data: IPersonTeam;
};

function About({ data }: Props) {
  return (
    <Box component="div">
      <Typography className={styles.about_title} component="h1">
        Our Team
      </Typography>
      <Box className={styles.about_container} component="div">
        <img src={data.image} width="200px" height="auto" />
        <Box className={styles.about_description_wrapper} component="div">
          <Typography>{data.name}</Typography>
          <Typography>{data.stack}</Typography>
          <Typography>{data.text}</Typography>
          <Link href={data.gitLink}>
            <GitHubIcon />
          </Link>
        </Box>
      </Box>
    </Box>
  );
}

export default About;
