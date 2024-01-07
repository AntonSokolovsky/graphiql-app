import {
  AppBar,
  Box,
  Button,
  IconButton,
  List,
  SelectChangeEvent,
  Toolbar,
  useTheme,
} from '@mui/material';
import { NavLink } from 'react-router-dom';
import NavIconQL from '../../assets/svg/graphQl-icon';
import {
  DarkModeOutlined,
  LightModeOutlined,
  LogoutOutlined,
} from '@mui/icons-material';
import { PAGES } from '../../router/pages';
import NavItem from '../NavItem/NavItem';
import { logout } from '../../services/auth/firebase';
import { useAuthStore } from '../../store/useAuthStore';
import { useThemeModeStore } from '../../store/useThemeModeStore';
import LanguageBar from '../LanguageBar/LanguageBar';
import { useLanguageStore, LanguageList } from '../../store/useLanguageStore';

function NavBar() {
  const theme = useTheme().palette.mode;
  const { language, setLanguage } = useLanguageStore();
  const [mode, setMode] = useThemeModeStore((state) => [
    state.mode,
    state.setMode,
  ]);
  const isAuth = useAuthStore((state) => state.isAuth);
  const removeUser = useAuthStore((state) => state.removeUser);

  function handleModeChange() {
    setMode(mode === 'light' ? 'dark' : 'light');
  }
  function handleLogout() {
    removeUser();
    logout();
  }

  function handleChangeLanguage(event: SelectChangeEvent) {
    setLanguage(event.target.value as LanguageList);
  }

  return (
    <AppBar component="nav" position="sticky">
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <NavIconQL />
        <List sx={{ display: 'flex', gap: '10px' }}>
          <NavItem
            name={PAGES.MAIN.name.toUpperCase()}
            path={PAGES.MAIN.path}
          />
          <NavItem
            name={PAGES.WELCOME.name.toUpperCase()}
            path={PAGES.WELCOME.path}
          />
        </List>
        {!isAuth ? (
          <Box sx={{ display: 'flex', gap: '10px' }}>
            <NavLink to={PAGES.SIGN_IN.path}>
              <Button variant="contained">
                {PAGES.SIGN_IN.name.toUpperCase()}
              </Button>
            </NavLink>
            <NavLink to={PAGES.SIGN_UP.path}>
              <Button variant="contained">
                {PAGES.SIGN_UP.name.toUpperCase()}
              </Button>
            </NavLink>
          </Box>
        ) : (
          <IconButton onClick={handleLogout}>
            <LogoutOutlined />
          </IconButton>
        )}
        <IconButton onClick={handleModeChange}>
          {theme === 'dark' ? <LightModeOutlined /> : <DarkModeOutlined />}
        </IconButton>
        <LanguageBar language={language} handleChange={handleChangeLanguage} />
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
