import { Box, TextField, Theme, useTheme } from '@mui/material';
import { ChangeEvent, FC, useCallback, useEffect, useState } from 'react';
import parse from '../../services/graphql-parser';

type TEditorProps = {
  mode?: string;
  language?: string;
  defaultData?: string;
  setOuterQuery?: (query: string) => void;
};

const Editor: FC<TEditorProps> = ({
  mode,
  language = 'json',
  defaultData,
  setOuterQuery,
}): React.JSX.Element => {
  const theme: Theme = useTheme();
  const countLines = (value: string) => {
    if (value) {
      return value.split('\n').length;
    }
    return 0;
  };

  const prettify = useCallback((value: string, language: string) => {
    let prettified = '';
    if (language === 'json') {
      try {
        prettified = JSON.stringify(JSON.parse(value), null, 2);
      } catch (error) {
        prettified = value;
      }
    } else if (language === 'graphql') {
      prettified = parse(value);
    }
    if (prettified) {
      setTimeout(() => setLines(countLines(prettified)), 1);
    }
    return prettified;
  }, []);

  const [lines, setLines] = useState(defaultData ? countLines(defaultData) : 0);
  const [query, setQuery] = useState(
    defaultData ? prettify(defaultData, language) : ''
  );
  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const element = event.currentTarget as HTMLTextAreaElement;
    const value = element.value;
    setLines(countLines(value));
    setQuery(value);
    if (setOuterQuery) {
      setOuterQuery(value);
    }
  };

  useEffect(() => {
    if (defaultData) {
      setQuery(prettify(defaultData, language));
    }
  }, [defaultData, language, prettify]);
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          height: '100%',
        }}
      >
        <Box
          bgcolor={theme.palette.action.disabled}
          padding={'0.5rem 0.2rem 0 0'}
          width={'2rem'}
          lineHeight={1.445}
          textAlign={'right'}
        >
          {lines > 0 &&
            Array.from({ length: lines }, (_, i) => (
              <Box
                key={i + 1}
                sx={{
                  color: theme.palette.text.secondary,
                }}
              >
                {i + 1}
              </Box>
            ))}
        </Box>

        <TextField
          variant="outlined"
          sx={{
            bgcolor: theme.palette.divider,
            border: 'none',
            '& fieldset': { border: 'none' },
          }}
          size="small"
          minRows={lines}
          fullWidth
          multiline
          onChange={handleChange}
          inputProps={{ readOnly: mode === 'readonly' ? true : false }}
          value={query}
        ></TextField>
      </Box>
    </>
  );
};

export { Editor };
