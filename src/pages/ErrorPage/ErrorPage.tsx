import { Button } from '@mui/material';
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
      <div id="error-page">
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>
            {error.status}: {error.statusText}
          </i>
        </p>
        <p>
          <Button variant="contained" onClick={() => navigate(-1)}>
            Go back
          </Button>
        </p>
      </div>
    );
  } else {
    return null;
  }
}
