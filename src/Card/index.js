import React, {memo} from 'react';
import '../App.css';
import { useWeather } from '../hooks/useWeather';

export const Card = memo(({ city, dispatch }) => {
  const data = useWeather(city);

  if (!data) return null;

  const {name, weather, main} = data;
  const {description, icon} = weather[0];
  const {temp, humidity, feels_like} = main;

  const handleOnDelete = () => {
    dispatch({
      type: 'DELETE_CITY',
      payload: city,
    })
  };
  const handleOnEdit = () => {
    dispatch({
      type: 'EDIT_CITY',
      payload: city,
    })
  };

  return  (
    <div className="Card">
      <div className="ActionButtonWrap">
        <button
          className="ActionButton"
          onClick={handleOnEdit}
        > edit </button>
      <button
        className="ActionButton"
      onClick={handleOnDelete}
      > X </button>
    </div>
      <div className="MainInfo">
        <img className="Icon"
             src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
             alt="icon"/>
        <div className="Title"> {name} </div>
        <div className="Description"> {description} </div>
        <div className="Temperature"> {temp.toFixed()} </div>
      </div>
      <div className="Information">
        <div> Humidity: {humidity} </div>
        <div> Feels like: {feels_like.toFixed()}° </div>
      </div>
    </div>
  );
})
