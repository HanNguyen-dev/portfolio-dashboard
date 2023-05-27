import { fetchBase } from "../../../../utils/fetchBase";

const baseUrl = `${process.env.REACT_APP_PORTFOLIO_API}`

export const fetchPlaces = async (query: string, session?: string): Promise<any> => {
  return fetchBase(`${baseUrl}/places?q=${query}${session ? "&session=" + session : ""}`);
}

export const fetchForecastsByPlace = async (placeId: string, session?: string): Promise<any> => {
  const params = placeId ?
    `/${placeId + (session ? '/' + session : '')}` :
    '';
  return fetchBase(`${baseUrl}/weather${params}`);
}