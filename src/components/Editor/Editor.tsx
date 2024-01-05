import { Box } from '@mui/material';
import { ChangeEvent, FC, useState } from 'react';
import styles from './Editor.module.css';

type TEditorProps = {
  mode?: string;
};

const Editor: FC<TEditorProps> = ({ mode }): React.JSX.Element => {
  const [lines, setLines] = useState(0);

  const countLines = (value: string) => {
    return value.split('\n').length;
  };

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const element = event.currentTarget as HTMLTextAreaElement;
    const value = element.value;

    setLines(countLines(value));
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
        ></textarea>
      </div>
    </>
  );
};

export default Editor;
