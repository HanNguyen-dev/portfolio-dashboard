import style from './Portal.module.css';
import { ResponsiveLine } from '@nivo/line';

export default function Portal() {

  const newData = [
    {
      "id": "japan",
      "color": "hsl(54, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 188
        },
        {
          "x": "helicopter",
          "y": 213
        },
        {
          "x": "boat",
          "y": 37
        },
        {
          "x": "train",
          "y": 297
        },
        {
          "x": "subway",
          "y": 113
        },
        {
          "x": "bus",
          "y": 56
        },
        {
          "x": "car",
          "y": 135
        },
        {
          "x": "moto",
          "y": 251
        },
        {
          "x": "bicycle",
          "y": 45
        },
        {
          "x": "horse",
          "y": 218
        },
        {
          "x": "skateboard",
          "y": 200
        },
        {
          "x": "others",
          "y": 190
        }
      ]
    },
    {
      "id": "france",
      "color": "hsl(138, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 45
        },
        {
          "x": "helicopter",
          "y": 17
        },
        {
          "x": "boat",
          "y": 33
        },
        {
          "x": "train",
          "y": 44
        },
        {
          "x": "subway",
          "y": 75
        },
        {
          "x": "bus",
          "y": 13
        },
        {
          "x": "car",
          "y": 222
        },
        {
          "x": "moto",
          "y": 65
        },
        {
          "x": "bicycle",
          "y": 253
        },
        {
          "x": "horse",
          "y": 182
        },
        {
          "x": "skateboard",
          "y": 140
        },
        {
          "x": "others",
          "y": 253
        }
      ]
    },
    {
      "id": "us",
      "color": "hsl(74, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 132
        },
        {
          "x": "helicopter",
          "y": 210
        },
        {
          "x": "boat",
          "y": 56
        },
        {
          "x": "train",
          "y": 204
        },
        {
          "x": "subway",
          "y": 76
        },
        {
          "x": "bus",
          "y": 268
        },
        {
          "x": "car",
          "y": 180
        },
        {
          "x": "moto",
          "y": 213
        },
        {
          "x": "bicycle",
          "y": 221
        },
        {
          "x": "horse",
          "y": 81
        },
        {
          "x": "skateboard",
          "y": 63
        },
        {
          "x": "others",
          "y": 253
        }
      ]
    },
    {
      "id": "germany",
      "color": "hsl(12, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 159
        },
        {
          "x": "helicopter",
          "y": 196
        },
        {
          "x": "boat",
          "y": 111
        },
        {
          "x": "train",
          "y": 26
        },
        {
          "x": "subway",
          "y": 94
        },
        {
          "x": "bus",
          "y": 250
        },
        {
          "x": "car",
          "y": 237
        },
        {
          "x": "moto",
          "y": 52
        },
        {
          "x": "bicycle",
          "y": 205
        },
        {
          "x": "horse",
          "y": 246
        },
        {
          "x": "skateboard",
          "y": 74
        },
        {
          "x": "others",
          "y": 297
        }
      ]
    },
    {
      "id": "norway",
      "color": "hsl(263, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 188
        },
        {
          "x": "helicopter",
          "y": 207
        },
        {
          "x": "boat",
          "y": 297
        },
        {
          "x": "train",
          "y": 15
        },
        {
          "x": "subway",
          "y": 239
        },
        {
          "x": "bus",
          "y": 59
        },
        {
          "x": "car",
          "y": 60
        },
        {
          "x": "moto",
          "y": 101
        },
        {
          "x": "bicycle",
          "y": 174
        },
        {
          "x": "horse",
          "y": 116
        },
        {
          "x": "skateboard",
          "y": 35
        },
        {
          "x": "others",
          "y": 241
        }
      ]
    }
  ];

  return (
    <div className={style.graphContainer}>
      <ResponsiveLine
        data={newData}
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
          legend: 'transportation',
          legendOffset: 36,
          legendPosition: 'middle'
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'count',
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
      />
    </div>
  );
};