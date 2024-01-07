import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { FC } from 'react';

type TDialogUrlProps = {
  outerUrl: string;
  setOuterUrl: (query: string) => void;
};

const DialogUrl: FC<TDialogUrlProps> = ({ outerUrl, setOuterUrl }) => {
  const [open, setOpen] = React.useState(false);
  const [url, setUrl] = React.useState(outerUrl);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOK = () => {
    setOuterUrl(url);
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
        Set up API URL
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Set up API URL</DialogTitle>
        <DialogContent>
          <DialogContentText>
            You can enter your own GraphQL API URL or use StarWars API: <br />
            https://swapi-graphql.netlify.app/.netlify/functions/index
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            data-testid="urlInput"
            fullWidth
            variant="standard"
            value={url}
            onChange={(event) => setUrl(event.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleOK}>OK</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};

export default DialogUrl;
