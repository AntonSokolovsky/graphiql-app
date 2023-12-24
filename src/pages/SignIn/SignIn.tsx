import SignInModal from '../../components/SignInModal/SignInModal';
import SignUpModal from '../../components/SignUpModal/SignUpModal';
import { TSignInProps } from './SignIn.type';

export default function SignIn({ action }: TSignInProps): React.JSX.Element {
  return (
    <>
      <div>
        <h2>{action}</h2>
        {action === 'sign-in' ? <SignInModal /> : <SignUpModal />}
      </div>
    </>
  );
}
