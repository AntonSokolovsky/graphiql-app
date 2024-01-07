import { Button, FormControlLabel, Grid, Paper, Switch } from '@mui/material';
import { useState } from 'react';
import styles from './MainPage.module.css';
import Editor from '../../components/Editor/Editor';
import send from '../../services/send';
import DialogUrl from '../../components/DialogUrl/DialogUrl';

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
  const [isShowDocs, setIsShowDocs] = useState(false);

  const [query, setQuery] = useState(DEFAULT_QUERY);
  const [url, setUrl] = useState(DEFAULT_URL);
  const [response, setResponse] = useState(DEFAULT_RESPONSE);

  const handleSendQuery = async () => {
    const response = await send(query, url);
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
                  label="Show docs"
                />
                <FormControlLabel
                  control={
                    <Switch
                      checked={isShowDocs}
                      disabled
                      onChange={(event) => setIsShowDocs(event.target.checked)}
                    />
                  }
                  label="Show variables"
                />
                <FormControlLabel
                  control={
                    <Switch
                      checked={isShowDocs}
                      disabled
                      onChange={(event) => setIsShowDocs(event.target.checked)}
                    />
                  }
                  label="Show headers"
                />
                <Button variant="outlined" onClick={handleSendQuery}>
                  Send query
                </Button>
                <Button variant="outlined" disabled>
                  Prettify query
                </Button>
                <DialogUrl outerUrl={url} setOuterUrl={setUrl} />
              </Paper>
            </Grid>
          </Grid>
        </Grid>
        {/* Pans */}
        <Grid item xs={12}>
          <Grid container spacing={1}>
            {isShowDocs && (
              <Grid item xs={2}>
                <Paper className={styles.panel}>Docs</Paper>
              </Grid>
            )}
            <Grid item xs={6}>
              <Grid container spacing={1}>
                <Grid item xs={12}>
                  <Paper className={styles.panel}>
                    <Grid container spacing={1}>
                      <Grid item xs={12} className={styles.Editor}>
                        <Editor
                          language="graphql"
                          setOuterQuery={setQuery}
                          defaultData={query}
                        />
                      </Grid>
                      <Grid item xs={12} className={styles.VariablesEditor}>
                        <Editor />
                      </Grid>
                    </Grid>
                  </Paper>
                </Grid>
              </Grid>
            </Grid>
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
