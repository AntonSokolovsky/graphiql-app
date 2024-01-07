import { Button, FormControlLabel, Grid, Paper, Switch } from '@mui/material';
import { useState } from 'react';
import styles from './MainPage.module.css';
import Editor from '../../components/Editor/Editor';
import send from '../../services/send';
import DialogUrl from '../../components/DialogUrl/DialogUrl';
import { useLanguageStore } from '../../store/useLanguageStore';
import { TEXT } from '../../constants/localization';

const DEFAULT_QUERY = `# Try to add 'director' to query params

query Query {
  film (id: "ZmlsbXM6MQ==") {
    title
  }
}`;
const DEFAULT_RESPONSE = `{
  "data": {
    "film": {
      "title": "A New Hope"
    }
  }
}`;
const DEFAULT_URL = `https://swapi-graphql.netlify.app/.netlify/functions/index`;

export default function MainPage() {
  const { language } = useLanguageStore();
  const [isShowDocs, setIsShowDocs] = useState(false);
  const [isShowVariables, setIsShowVariables] = useState(true);

  const [query, setQuery] = useState(DEFAULT_QUERY);
  const [url, setUrl] = useState(DEFAULT_URL);
  const [response, setResponse] = useState(DEFAULT_RESPONSE);
  const [variables, setVariables] = useState('');

  const handleSendQuery = async () => {
    const response = await send(query, variables, url);
    setResponse(JSON.stringify(response));
  };

  return (
    <>
      {/* Toolbar */}
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <Paper className={styles.panel}>
                <FormControlLabel
                  control={
                    <Switch
                      checked={isShowDocs}
                      onChange={(event) => setIsShowDocs(event.target.checked)}
                    />
                  }
                  label={TEXT.mainPage.showDocs[language]}
                />
                <FormControlLabel
                  control={
                    <Switch
                      checked={isShowVariables}
                      onChange={(event) =>
                        setIsShowVariables(event.target.checked)
                      }
                    />
                  }
                  label={TEXT.mainPage.showVariables[language]}
                />
                <FormControlLabel
                  control={
                    <Switch
                      checked={isShowDocs}
                      disabled
                      onChange={(event) => setIsShowDocs(event.target.checked)}
                    />
                  }
                  label={TEXT.mainPage.showHeaders[language]}
                />
                <Button variant="outlined" onClick={handleSendQuery}>
                  {TEXT.mainPage.sendQuery[language]}
                </Button>
                <Button variant="outlined" disabled>
                  {TEXT.mainPage.prettifyQuery[language]}
                </Button>
                <DialogUrl outerUrl={url} setOuterUrl={setUrl} />
              </Paper>
            </Grid>
          </Grid>
        </Grid>
        {/* Pans */}
        <Grid item xs={12}>
          <Grid container spacing={1}>
            {/* Docs */}
            {isShowDocs && (
              <Grid item xs={2}>
                <Paper className={styles.panel}>
                  {TEXT.mainPage.docs[language]}
                </Paper>
              </Grid>
            )}
            {/* Query editor & variables/header editors */}
            <Grid item xs={6}>
              <Grid container spacing={1}>
                <Grid item xs={12}>
                  <Paper className={styles.panel}>
                    <Grid container spacing={1}>
                      {/* Query editor */}
                      <Grid
                        item
                        xs={12}
                        className={
                          isShowVariables ? styles.Editor : styles.EditorFull
                        }
                      >
                        <Editor
                          language="graphql"
                          setOuterQuery={setQuery}
                          defaultData={query}
                        />
                      </Grid>
                      {/* Variables/header editors */}
                      {isShowVariables && (
                        <Grid item xs={12} className={styles.VariablesEditor}>
                          {TEXT.mainPage.variables[language]}
                          <Editor
                            defaultData={variables}
                            setOuterQuery={setVariables}
                          />
                        </Grid>
                      )}
                    </Grid>
                  </Paper>
                </Grid>
              </Grid>
            </Grid>
            {/* Response view */}
            <Grid item xs={isShowDocs ? 4 : 6}>
              <Paper className={`${styles.JsonViewer} ${styles.panel}`}>
                <Editor
                  mode="readonly"
                  language="json"
                  defaultData={response}
                />
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
