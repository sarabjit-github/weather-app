import React, {useState} from 'react';
import { WeatherLoader } from '../MyComponents/WeatherLoader';

export const useWeatherPageLoader = () => {
    const [weatherLoader, setWeatherLoader] = useState(false)
  return [
      weatherLoader ? <WeatherLoader /> : null,
      ()=> setWeatherLoader(true),// Shwo loader
      ()=> setWeatherLoader(false) // Hide loader
  ]
}
