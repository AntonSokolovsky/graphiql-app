import { Box, Typography } from '@mui/material';
import SignInModal from '../../components/SignInModal/SignInModal';
import SignUpModal from '../../components/SignUpModal/SignUpModal';
import { ACTION } from '../../router/action';
import { TSignInProps } from './SignIn.type';

export default function SignIn({ action }: TSignInProps): React.JSX.Element {
  return (
    <>
      <Box>
        <Typography variant="h2">{action}</Typography>
        {action === ACTION.SIGN_IN ? <SignInModal /> : <SignUpModal />}
      </Box>
    </>
  );
}
