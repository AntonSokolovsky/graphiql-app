import { create } from 'zustand';

export type LanguageList = 'en' | 'ru';

interface ILanguageStore {
  language: LanguageList;
  error: string;
  loading: boolean;
  setLanguage: (language: LanguageList) => void;
}

export const useLanguageStore = create<ILanguageStore>((set) => ({
  language: (localStorage.getItem('language') as LanguageList) || 'en',
  error: '',
  loading: false,
  setLanguage: (language) => {
    set(() => {
      localStorage.setItem('language', language);
      return { language };
    });
  },
}));
