import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import styles from "./Weather.module.css";

export default function Weather() {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Search
        </Typography>
        <Divider />
        <Typography variant="h5" component="div" sx={{ mt: 1.5 }}>
          Kansas City, MO
        </Typography>
        <Grid container spacing={0}>
          <Grid item
            xs={6}
          >
            <Typography sx={{ mt: 2, mb: 1.5, fontSize: 60, textAlign: 'center' }}>
              78°C
            </Typography>
            <Typography sx={{ mb: 1.5, textAlign: 'center' }} color="text.secondary">
              H: 80°C  L: 60°C
            </Typography>
          </Grid>
          <Grid item
            xs={6}
          >
            <div className={styles.iconContainer}>
              <img src="https://openweathermap.org/img/wn/10d@2x.png" />
              <Typography sx={{ mb: 1.5, textAlign: 'center' }} color="text.secondary">
                Cloudy
              </Typography>
            </div>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions>
        <Button size="small">Convert to Celsius</Button>
      </CardActions>
      </Card>
    </Box>
  );
}