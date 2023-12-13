import { Outlet } from 'react-router-dom';

function Welcome() {
  return (
    <>
      <div>Welcome</div>
      <Outlet />
    </>
  );
}

export default Welcome;
