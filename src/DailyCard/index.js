import React from 'react';

export const DailyCard = ({ dailyCard }) => {
  const {day, date} = dailyCard;
  const {avgtemp_c, condition} = day;
  const {text, icon} = condition;
  return (
    <div className="DailyCard">
      <img className="Icon" src={icon} />
    </div>
  )
};

