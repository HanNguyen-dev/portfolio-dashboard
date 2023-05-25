import { useState, useMemo, useRef, useEffect } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import styles from "./Weather.module.css";
import Autocomplete from "@mui/material/Autocomplete";
import { debounce } from '@mui/material/utils';
import { useGetForecastsByPlaceQuery, useGetPlacesQuery } from "../../portalApi";
import Link from "@mui/material/Link";
import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import { selectLocation, updateLocation } from "../../portalSlice";
import LocationOnIcon from "@mui/icons-material/LocationOn"


export default function Weather() {
  const [query, setQuery] = useState<string>('');
  const session = useRef<string>('');

  const location = useAppSelector(selectLocation);
  const dispatch = useAppDispatch();
  const { data: prediction } = useGetPlacesQuery(
    { session: session.current, query },
    { skip: !query || query === location?.description });

  const { data: forecasts } = useGetForecastsByPlaceQuery(
    { placeId: location?.placeId || '', session: session.current },
    { skip: !location || !session.current });

  useMemo(() =>  {
    session.current = prediction?.session || '';
  }, [prediction?.session]);

  const handleQuery = useMemo(
    () => debounce(
      (event: any, inputValue: string) => setQuery(inputValue),
      400,
    ), []);

  const onSelect = (event: any, inputValue: any) => {
    const index = prediction?.places.findIndex(x => x.description == inputValue);
    prediction && index !== undefined && index > -1 && dispatch(updateLocation(prediction.places[index]));
  }

  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">
      <CardContent>
        <Autocomplete
          id="free-solo-demo"
          freeSolo
          filterOptions={x => x}
          value={location?.description || ''}
          options={prediction?.places.map((option) => option.description) || []}
          onChange={onSelect}
          onInputChange={handleQuery}
          renderInput={(params) => <TextField {...params} variant="standard" label="Enter a location" />}
        />
        <Typography variant="h5" component="div" sx={{ mt: 2 }}>
          {
            location && forecasts &&
              <Link
                color="inherit"
                href={forecasts.location.url}
                rel="noopener"
                target="_blank">
                  <LocationOnIcon sx={{ color: 'text.secondary' }} />
                  {location.description}
              </Link>
          }
        </Typography>
        <Grid container spacing={0}>
          <Grid item
            xs={6}
          >
            <Typography sx={{ mt: 2, mb: 1.5, fontSize: 60, textAlign: 'center' }}>
              {forecasts?.current_observation.condition.temperature || "--"}°C
            </Typography>
            <Typography sx={{ mb: 1.5, textAlign: 'center' }} color="text.secondary">
              H: 80°C  L: 60°C
            </Typography>
          </Grid>
          <Grid item
            xs={6}
          >
            <div className={styles.iconContainer}>
              <img src={forecasts?.current_observation.condition.iconUrl.replace("4x", "2x")} alt="weather icon"/>
              <Typography sx={{ mb: 1.5, textAlign: 'center' }} color="text.secondary">
                {forecasts?.current_observation.condition.text || '____'}
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