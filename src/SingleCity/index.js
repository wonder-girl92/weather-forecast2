import React from 'react';

import { Card } from '../Card';
import { useForecast } from '../hooks/useForecast';
import { DailyCard } from '../DailyCard';
import '../App.css';
import { Link } from 'react-router-dom';

export const SingleCity = (props) => {
  const { city } = props.match.params;
  const data = useForecast(city);
  console.log(city)
  console.log('data', data)

  return (
    <div className="SingleCityWrap">
      <Link
        to="/home"
        className="GoBack"
      > Go back </Link>
    <Card city={city} />
      {data &&
        <div className="DailyCards">
          {data.forecast.forecastday.map(dailyCard => <DailyCard
          dailyCard={dailyCard}
          key={dailyCard.hour[0].time_epoch}
          /> )}
          </div>
      }
      </div>
  )
}

