export const PAGES = {
  WELCOME: {
    name: {
      en: 'welcome',
      ru: 'О нас',
    },
    path: '/welcome',
  },
  SIGN_IN: {
    name: { en: 'sign in', ru: 'вход' },
    path: '/sign-in',
  },
  SIGN_UP: {
    name: { en: 'sign up', ru: 'регистрация' },
    path: '/sign-up',
  },
  MAIN: {
    name: { en: 'home', ru: 'главная' },
    path: '/main',
    isRequireAuth: true,
  },
};
