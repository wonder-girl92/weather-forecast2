import {useState, useEffect} from 'react';
import { API_KEY } from '../settings';

export const useWeather = (city) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch (`http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&lang=ru`)
      .then(res => res.json())
      .then(setData);
  }, [city]);
  return data;
}
