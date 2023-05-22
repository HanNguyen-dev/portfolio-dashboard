export type Places = {
  session: string,
  size: number,
  places: Place[]
}

export type Place = {
  placeId: string,
  description: string,
}

export type PlaceDetails = {
  placeId: string,
  name: string,
  url: string,
  geoLocation: {
    latitude: number,
    longitude: number,
  },
}