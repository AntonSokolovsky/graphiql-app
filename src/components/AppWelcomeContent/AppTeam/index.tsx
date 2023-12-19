import { Box, Link, Typography } from '@mui/material';
import { IPersonTeam } from '../../../interface';
import GitHubIcon from '../../../assets/svg/github-icon';

type Props = {
  data: IPersonTeam;
};

function About({ data }: Props) {
  return (
    <Box component="div">
      <Typography
        component="h1"
        style={{
          fontSize: '3rem',
          color: '#3F5069',
          fontFamily: 'Roboto, sans-serif',
          fontWeight: 400,
          textAlign: 'center',
        }}
      >
        Our Team
      </Typography>
      <Box
        component="div"
        style={{
          display: 'flex',
          border: '1px solid #1976d2',
          borderRadius: '8px',
          overflow: 'hidden',
        }}
      >
        <img src={data.image} width="200px" height="auto" />
        <Box
          component="div"
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: '10px',
          }}
        >
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
