import { FormControl, MenuItem, Select } from '@mui/material';
import { IPropsLanguageBar } from './LanguageBar.type';

function LanguageBar({ handleChange, language }: IPropsLanguageBar) {
  return (
    <FormControl>
      <Select
        renderValue={(value) => (value === 'en' ? 'EN' : 'RU')}
        inputProps={{ IconComponent: () => null }}
        variant="standard"
        value={language}
        onChange={handleChange}
      >
        <MenuItem value={'en'} title="ENN" aria-label="ENN">
          English
        </MenuItem>
        <MenuItem value={'ru'}>Русский</MenuItem>
      </Select>
    </FormControl>
  );
}

export default LanguageBar;
