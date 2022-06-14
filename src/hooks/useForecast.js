import React, { useEffect, useState } from 'react'
import { API_KEY } from '../settings'

const UseForecast = (city) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    if( city !== null) {
      fetch (`http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=7&aqi=no&alerts=no&lang=ru`)
        .then(res => res.json())
        .then(setData);
    }
    }, [city]);
  return data;
}

export default UseForecast
