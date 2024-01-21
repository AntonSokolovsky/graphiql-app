import { Box, Button, Typography } from '@mui/material';
import {
  isRouteErrorResponse,
  useNavigate,
  useRouteError,
} from 'react-router-dom';

export default function ErrorPage() {
  const error: unknown = useRouteError();
  const navigate = useNavigate();

  if (isRouteErrorResponse(error)) {
    return (
      <Box id="error-page">
        <Typography variant="h1">Oops!</Typography>
        <Typography>Sorry, an unexpected error has occurred.</Typography>
        <Typography variant="h5">
          {error.status}: {error.statusText}
        </Typography>
        <Typography>
          <Button variant="contained" onClick={() => navigate(-1)}>
            Go back
          </Button>
        </Typography>
      </Box>
    );
  } else {
    return null;
  }
}
