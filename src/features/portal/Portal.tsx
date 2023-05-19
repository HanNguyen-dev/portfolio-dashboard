import style from './Portal.module.css';
import { ResponsiveLine } from '@nivo/line';
import { useGetCpiQuery, useGetUnemploymentRateQuery } from './portalApi';

export default function Portal() {
  const { data: cpiTimeSeries } = useGetCpiQuery();
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
    {
      id: "Unemployment Rate",
      color: "hsl(138, 70%, 50%)",
      data: unemploymentRates,
    },
    {
      id: "Interest Rate",
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
    <div className={style.graphContainer}>
      {
        laborRates
          .map(rate => !!rate.data.length)
          .reduce((n0, n1) => {
            return n0 && n1;
          }, true) ?
            <ResponsiveLine
              data={laborRates}
              margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
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
                tickRotation: 0,
                legend: 'Month Year',
                legendOffset: 36,
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
              legends={[
                {
                  anchor: 'bottom-right',
                  direction: 'column',
                  justify: false,
                  translateX: 100,
                  translateY: 0,
                  itemsSpacing: 0,
                  itemDirection: 'left-to-right',
                  itemWidth: 80,
                  itemHeight: 20,
                  itemOpacity: 0.75,
                  symbolSize: 12,
                  symbolShape: 'circle',
                  symbolBorderColor: 'rgba(0, 0, 0, .5)',
                  effects: [
                    {
                      on: 'hover',
                      style: {
                        itemBackground: 'rgba(0, 0, 0, .03)',
                        itemOpacity: 1
                      }
                    }
                  ]
                }
              ]}
            /> :
            <div>Sorry, we are unable to retrieve the data requested.</div>
      }
    </div>
  );
};