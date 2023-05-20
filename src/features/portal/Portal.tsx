import Grid from '@mui/material/Grid'
import styles from './Portal.module.css';
import Weather from './components/weather/Weather';

export default function Portal() {
  return (
    <Grid container spacing={3} className={styles.portalGrid}>
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
      </Grid>
    </Grid>
  );
}