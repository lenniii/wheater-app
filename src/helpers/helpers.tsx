const API_KEY = "14f3c5286bcde36ab4ed9c44907782f0";
const CURRENT_WEATHER = "http://api.openweathermap.org/data/2.5/weather?q=";
const FORECAST_WEATHER = "http://api.openweathermap.org/data/2.5/forecast?q=";

export const fetch_current_weather = async (city: string): Promise<JSON> => {
  const r = await fetch(CURRENT_WEATHER + city + "&appId=" + API_KEY);
  const CURRENT_WEATHER_JSON = await r.json();
  return CURRENT_WEATHER_JSON;
};

export const fetch_forecast_weather = async (city: string): Promise<JSON> => {
  const r = await fetch(FORECAST_WEATHER + city + "&appId=" + API_KEY);
  const FORECAST_WEATHER_JSON = await r.json();
  return FORECAST_WEATHER_JSON;
};

export const toCelsius = (kelvin: string): Number => {
  const celsius = Number(kelvin) - 273.15;
  return celsius;
};

export const isObjectEmpty = (object: Object): boolean => {
  return !Object.keys(object).length;
};
