import { FC } from 'react';

type TSignInProps = {
  action: string;
};

const SignIn: FC<TSignInProps> = ({ action }): React.JSX.Element => {
  return (
    <>
      <div>
        <h2>{action}</h2> <p>Sign in/sign up component will be here.</p>
      </div>
    </>
  );
};

export default SignIn;
