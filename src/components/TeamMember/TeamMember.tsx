import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from '@mui/material';
import { IPersonTeam } from '../../interface';
import { GitHub } from '@mui/icons-material';

type Props = {
  data: IPersonTeam;
};

function TeamMember({ data: { image, name, stack, text, gitLink } }: Props) {
  return (
    <Card component="div">
      <Box
        component="div"
        border={'1px solid #1976d2'}
        borderRadius={'8px'}
        sx={{
          display: 'flex',
          overflow: 'hidden',
        }}
      >
        <CardMedia
          component={'img'}
          src={image}
          sx={{ height: 200, width: 200 }}
        />
        <CardContent>
          <Typography variant="h6" component={'h3'}>
            {name}
          </Typography>
          <Typography variant="body1">{stack}</Typography>
          <Typography variant="body1">{text}</Typography>
          <CardActions>
            <IconButton href={gitLink}>
              <GitHub sx={{ width: '5rem', height: '5rem' }} />
            </IconButton>
          </CardActions>
        </CardContent>
      </Box>
    </Card>
  );
}

export default TeamMember;
