import React from 'react';

import { Card } from '../Card';
import useForecast from '../hooks/useForecast'
import { DailyCard } from '../DailyCard'

export const SingleCity = (props) => {
  const { city } = props.match.params;
  const data = useForecast(city);
  console.log(city)
  console.log('data', data)

  return (
    <div className="SingleCityWrap">
    <Card city={city} />
      {data &&
        <div className="DailyCards">
          {data.forecast.forecastday.map(dailyCard => <DailyCard
          dailyCard={dailyCard} key={dailyCard.date_epoch}
          /> )}
          </div>}
      </div>
  )
}

