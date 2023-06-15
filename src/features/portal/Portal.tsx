import Grid from '@mui/material/Grid'
import Weather from './components/weather/Weather';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { selectError } from './state/portalSelector';
import { updateError } from './portalSlice';
import Introduction from './components/introduction';
import Labor from './components/labor/Labor';

export default function Portal() {
  const error = useAppSelector(selectError);
  const dispatch = useAppDispatch();

  return (
    <>
      <Grid container spacing={3}
        sx={{
          maxWidth: '83.125rem',
          mt: '2rem',
          mb: '2rem',
          pl: '2rem',
          pr: '2rem'
        }}
      >
        <Grid item
          xs={12}
        >
          <Introduction />
        </Grid>
        <Grid item
          md={6}
          xs={12}
        >
          <Weather />
        </Grid>
        <Grid item
          md={6}
          xs={12}
        >
          <Labor />
        </Grid>
        <Grid item
          md={6}
          xs={12}
        >
        </Grid>
      </Grid>
      <Snackbar
        open={error}
        onClose={(event, reason) => {
          dispatch(updateError(false));
        }}
        autoHideDuration={4000}
      >
        <Alert severity="error">
          We're sorry, an unexpected error occurred.  Please try again later.
        </Alert>
      </Snackbar>
    </>
  );
}