import { TSignInProps } from './SignIn.type';

export default function SignIn({ action }: TSignInProps): React.JSX.Element {
  return (
    <>
      <div>
        <h2>{action}</h2> <p>Sign in/sign up component will be here.</p>
      </div>
    </>
  );
}
