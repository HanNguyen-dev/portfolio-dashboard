import { ResponsiveLine } from '@nivo/line';
import { useGetCpiQuery, useGetUnemploymentRateQuery } from '../../portalApi';
import style from './Labor.module.css';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';

export default function Labor() {
  const { data: cpiTimeSeries, isLoading } = useGetCpiQuery();
  const { data: unemploymentTimeSeries } = useGetUnemploymentRateQuery();

  type Point = { x: string, y: number }
  let unemploymentRates: Point[] = [];
  let inflationRates: Point[] = [];

  if (cpiTimeSeries?.status != 'REQUEST_NOT_PROCESSED') {
    const rawCpi = cpiTimeSeries?.Results.series[0].data || [];
    inflationRates = rawCpi
      .slice(0, rawCpi.length - 12)
      .map((cpi, index) => {
        const lastYearCpi = Number(rawCpi[index + 12].value);
        const rate = (Number(cpi.value) * 100 - lastYearCpi * 100) / lastYearCpi;
        return {
          x: `${cpi.periodName.slice(0, 3).toUpperCase()} ${cpi.year}`,
          y: rate,
        };
      })
      .reverse();
  }

  if (unemploymentTimeSeries?.status != 'REQUEST_NOT_PROCESSED') {
    const rawUnemploymentRates = unemploymentTimeSeries?.Results.series[0].data || [];
    unemploymentRates = rawUnemploymentRates
      .slice(0, rawUnemploymentRates.length - 12)
      .map(rate => ({
        x: `${rate.periodName.slice(0, 3).toUpperCase()} ${rate.year}`,
        y: Number(rate.value),
      }))
      .reverse();
  }



  const laborRates = [
    // {
    //   id: "Unemployment Rate",
    //   color: "hsl(138, 70%, 50%)",
    //   data: unemploymentRates,
    // },
    {
      id: "Inflation Rate",
      color: "hsl(263, 70%, 50%)",
      data: inflationRates,
    }
  ];

  // hsl(54, 70%, 50%)
  // hsl(138, 70%, 50%)
  // hsl(74, 70%, 50%)
  // hsl(12, 70%, 50%)
  // hsl(263, 70%, 50%)

  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">
        <CardContent>
          <Typography sx={{ textAlign: 'center' }} >
            Inflation Rates
          </Typography>
          <div className={style.graphContainer}>{
            isLoading ?
              <div className={style.spinnerContainer}>
                <CircularProgress />
              </div> :
              laborRates
                .map(rate => !!rate.data.length)
                .reduce((n0, n1) => {
                  return n0 && n1;
                }, true) ?
                  <ResponsiveLine
                    data={laborRates}
                    margin={{ top: 30, right: 40, bottom: 50, left: 45 }}
                    xScale={{ type: 'point' }}
                    yScale={{
                        type: 'linear',
                        min: 'auto',
                        max: 'auto',
                        stacked: true,
                        reverse: false
                    }}
                    yFormat=" >-.2f"
                    axisTop={null}
                    axisRight={null}
                    axisBottom={{
                      tickSize: 5,
                      tickPadding: 5,
                      tickRotation: -45,
                      legend: 'Month Year',
                      legendOffset: 60,
                      legendPosition: 'middle'
                    }}
                    axisLeft={{
                      tickSize: 5,
                      tickPadding: 5,
                      tickRotation: 0,
                      legend: 'Percentage',
                      legendOffset: -40,
                      legendPosition: 'middle'
                    }}
                    pointSize={10}
                    pointColor={{ theme: 'background' }}
                    pointBorderWidth={2}
                    pointBorderColor={{ from: 'serieColor' }}
                    pointLabelYOffset={-12}
                    useMesh={true}
                  /> :
                  <div>Sorry, we are unable to retrieve the data requested.</div>
          }</div>
        </CardContent>
      </Card>
    </Box>
  );
};