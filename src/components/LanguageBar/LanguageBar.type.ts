import { SelectChangeEvent } from '@mui/material';
import { LanguageList } from '../../store/useLanguageStore';

export interface IPropsLanguageBar {
  language: LanguageList;
  handleChange: (event: SelectChangeEvent) => void;
}
