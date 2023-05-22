export type Forecasts = {
  location: string,
  current_observation: {
    wind: {
      chill?: number,
      direction: number,
      speed: number,
    },
    atmosphere: {
      humidity: number,
      visibility: number,
      pressure: number,
      rising: number,
    },
    astronomy: {
      sunrise: string,
      sunset: string,
    },
    condition: {
      text: string,
      code: number,
      temperature: number,
      iconUrl: string,
    }
  },
  forecasts: {
    day: string,
    date: number,
    low: number,
    high: number,
    text: string,
    code: any,
    iconUrl: string,
  }[];
}