import { Box } from '@mui/material';
import { ChangeEvent, FC, useCallback, useEffect, useState } from 'react';
import parse from '../../services/graphql-parser';
import styles from './Editor.module.css';

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
      <div className={styles.editorContainer}>
        <Box className={styles.lines}>
          {lines > 0 &&
            Array.from({ length: lines }, (_, i) => (
              <div key={i + 1} className={styles.line}>
                {i + 1}
              </div>
            ))}
        </Box>

        <textarea
          className={styles.editorTextArea}
          onChange={handleChange}
          readOnly={mode === 'readonly' ? true : false}
          value={query}
        ></textarea>
      </div>
    </>
  );
};

export default Editor;
