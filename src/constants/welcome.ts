import { IPersonTeam } from '../interface';

export const personsTeam: IPersonTeam[] = [
  {
    id: 1,
    name: { en: 'Anton Sokolovsky', ru: 'Антон Соколовский' },
    image: './src/assets/img/Anton.png',
    stack: { en: 'Frontend developer', ru: 'Frontend-разработчик' },
    text: {
      en: 'Implemented the functionality of the auth',
      ru: 'Реализация авторизации',
    },
    gitLink: 'https://github.com/AntonSokolovsky',
  },
  {
    id: 2,
    name: { en: 'Nikita Snitko', ru: 'Никита Снитко' },
    image: './src/assets/img/Nikita.png',
    stack: { en: 'Frontend developer', ru: 'Frontend-разработчик' },
    text: {
      en: 'Implemented the functionality of the welcome page',
      ru: 'Реализация приветственной страницы',
    },
    gitLink: 'https://github.com/Snitkon',
  },
  {
    id: 3,
    name: { en: 'Nikolai Minkevich', ru: 'Николай Минкевич' },
    image: './src/assets/img/Nikolai.jpeg',
    stack: { en: 'Frontend developer', ru: 'Frontend-разработчик' },
    text: {
      en: 'Implemented the functionality of the query editor page',
      ru: 'Реализация страницы запросов',
    },
    gitLink: 'https://github.com/nikolai-minkevich',
  },
];
