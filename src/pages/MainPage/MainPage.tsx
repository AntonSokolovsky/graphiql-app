import { Button, FormControlLabel, Grid, Paper, Switch } from '@mui/material';
import { useState } from 'react';
import styles from './MainPage.module.css';
import Editor from '../../components/Editor/Editor';

export default function MainPage() {
  const [isShowDocs, setIsShowDocs] = useState(false);

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
                <Button variant="outlined">Prettify query</Button>
                <Button variant="outlined" disabled>
                  Set up API URL
                </Button>
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
                    {/* <Paper>1</Paper>
                    <Paper>2</Paper> */}
                    <Grid container spacing={1}>
                      <Grid item xs={12} className={styles.Editor}>
                        <Editor />
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
                <Editor mode="readonly" />
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
