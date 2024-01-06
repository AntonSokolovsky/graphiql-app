import { Box } from '@mui/material';
import { ChangeEvent, FC, useState } from 'react';
import parse from '../../services/graphql-parser';
import styles from './Editor.module.css';

type TEditorProps = {
  mode?: string;
  language?: string;
  children?: string;
};

const Editor: FC<TEditorProps> = ({
  mode,
  language = 'json',
  children,
}): React.JSX.Element => {
  const countLines = (value: string) => {
    if (value) {
      return value.split('\n').length;
    }
    return 0;
  };

  const [lines, setLines] = useState(children ? countLines(children) : 0);

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const element = event.currentTarget as HTMLTextAreaElement;
    const value = element.value;
    setLines(countLines(value));
  };

  const prettify = (value: string, language: string) => {
    let prettified = '';
    if (language === 'json') {
      try {
        prettified = JSON.stringify(JSON.parse(value), null, 2);
      } catch (error) {
        prettified = value;
      }
    } else if (language === 'graphql') {
      // TODO: implement prettifier
      prettified = parse(value);
    }
    if (prettified) {
      setTimeout(() => setLines(countLines(prettified)), 1);
    }
    return prettified;
  };

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
          defaultValue={children ? prettify(children, language) : ''}
        ></textarea>
      </div>
    </>
  );
};

export default Editor;
