const baseUrl = `${process.env.REACT_APP_PORTFOLIO_API}`

export const fetchPlaces = async (query: string, session?: string): Promise<any> => {
  return (await fetch(`${baseUrl}/places?q=${query}${session ? "&session=" + session : ""}`)).json();
}

export const fetchForecastsByPlace = async (placeId: string, session?: string): Promise<any> => {
  const params = placeId ? `/${placeId}/${session ?? ''}` : '';
  return (await fetch(`${baseUrl}/weather${params}`)).json();
}