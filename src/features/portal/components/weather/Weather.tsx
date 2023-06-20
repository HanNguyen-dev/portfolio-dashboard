import { useEffect, useMemo, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import styles from "./Weather.module.css";
import Autocomplete from "@mui/material/Autocomplete";
import LocationOnIcon from "@mui/icons-material/LocationOn"
import { debounce } from '@mui/material/utils';
import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import { selectForecasts, selectLocation, selectPlaces } from "../../state/portalSelector";
import { updateLocation } from "../../portalSlice";

import { PortalActionTypes } from "../../state/portalActionTypes";
import { fetchForecasts, fetchPlaces } from "../../state/portalActions";


export default function Weather() {
  const location = useAppSelector(selectLocation);
  const predictions = useAppSelector(selectPlaces);
  const forecasts = useAppSelector(selectForecasts);
  const dispatch = useAppDispatch();
  const [isCelsius, setIsCelsius] = useState<boolean>(false);

  useEffect(() => {
    dispatch({
      type: PortalActionTypes.FETCH_FORECASTS_SAGA,
      payload: { placeId: '' },
    });
  }, []);

  const handleQuery = useMemo(
    () => debounce(
      (event: any, inputValue: string, reason: string) => {
        if (inputValue && reason == 'input') {
          dispatch(fetchPlaces({ query: inputValue, session: predictions?.session || '' }));
        }
      },
      400,
    ), [predictions?.session]);

  const onSelect = (event: any, inputValue: any) => {
    const index = predictions?.places.findIndex(x => x.description == inputValue);
    if (
      index !== undefined &&
      index > -1 &&
      predictions
    ) {
      dispatch(updateLocation(predictions.places[index]));
      dispatch(fetchForecasts({
        placeId: predictions.places[index].placeId,
        session: predictions.session
      }));
    }
  }

  const formatTemp = (fahrenheit: number | undefined) => {
    const unit = isCelsius ? '°C' : '°F';
    if (fahrenheit === undefined || fahrenheit === null) {
      return '--' + unit;
    }
    return Math.floor(isCelsius ? (fahrenheit - 32) * (5/9) : fahrenheit) + unit;
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
            options={predictions?.places?.map((option) => option.description) || []}
            onChange={onSelect}
            onInputChange={handleQuery}
            renderInput={(params) => <TextField {...params} variant="standard" label="Enter a location" />}
          />
          <Typography variant="h5" component="div" sx={{ mt: 2 }}>
            {
              location && forecasts ?
                <Link
                  color="inherit"
                  href={forecasts?.location?.url}
                  rel="noopener"
                  target="_blank">
                    <LocationOnIcon sx={{ color: 'text.secondary' }} />
                    {location.description}
                </Link> :
              forecasts?.location.name &&
                <div
                  color="inherit">
                    {forecasts.location.name}
                </div>
            }
          </Typography>
          <Grid container spacing={0}>
            <Grid item
              xs={6}
            >
              <Typography sx={{ mt: 2, mb: 1.5, fontSize: 60, textAlign: 'center' }}>
                {formatTemp(forecasts?.current_observation?.condition.temperature)}
              </Typography>
              <Typography sx={{ mb: 1.5, textAlign: 'center' }} color="text.secondary">
                H: {formatTemp(forecasts?.forecasts[0].high)} L: {formatTemp(forecasts?.forecasts[0].low)}
              </Typography>
            </Grid>
            <Grid item
              xs={6}
            >
              <div className={styles.iconContainer}>
                <img src={forecasts?.current_observation?.condition.iconUrl.replace("4x", "2x")} alt="weather icon"/>
                <Typography sx={{ mb: 1.5, textAlign: 'center' }} color="text.secondary">
                  {forecasts?.current_observation?.condition.text || '____'}
                </Typography>
              </div>
            </Grid>
          </Grid>
        </CardContent>
        <CardActions>
          <Button
            size="small"
            onClick={() => setIsCelsius(value => !value)}
          >
            Convert to {isCelsius ? 'Fahrenheit' : 'Celsius'}
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
}