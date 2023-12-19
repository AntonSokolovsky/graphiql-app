import { Outlet } from 'react-router-dom';
import Nav from '../../components/AppBar';
import Footer from '../../components/AppFooter';
import WelcomeContent from '../../components/AppWelcomeContent';

export default function Welcome() {
  return (
    <>
      <Nav />
      <WelcomeContent />
      <Outlet />

      <Footer />
    </>
  );
}
