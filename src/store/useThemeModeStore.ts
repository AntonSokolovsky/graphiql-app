import { create } from 'zustand';
import { PaletteMode } from '@mui/material';

interface ThemeStore {
  mode: PaletteMode;
  error: string;
  loading: boolean;
  setMode: (mode: PaletteMode) => void;
}

export const useThemeModeStore = create<ThemeStore>((set) => ({
  mode: (localStorage.getItem('mode') as PaletteMode) || 'light',
  error: '',
  loading: false,
  setMode: (mode) => {
    set(() => {
      localStorage.setItem('mode', mode);
      return { mode };
    });
  },
}));
