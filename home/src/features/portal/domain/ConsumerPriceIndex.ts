export type ConsumerPriceIndex = {
  status: string,
  responseTime: number,
  message: [],
  Results: {
    series: Array<{
      seriesID: string,
      data: Array<{
        year: string,
        period: string,
        periodName: string,
        latest: string,
        value: string,
        footnotes: Array<any>,
      }>;
    }>,
  },
}
