import React, { memo, useContext } from 'react';
import { Link, useHistory, useRouteMatch } from 'react-router-dom';

import '../App.css';
import { useWeather } from '../hooks/useWeather';
import { GlobalContext } from '../App';

  const CardNoMemo = ({ city }) => {
  const data = useWeather(city);
  const history = useHistory();
  const isHome = Boolean(useRouteMatch('/home'));
  const { dispatch } = useContext(GlobalContext);

  if (!data) return null;

  const {location, current} = data;
  const {name} = location;
  const {temp_c, condition, humidity, feelslike_c} = current;
  const {text, icon} = condition;

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
    history.push('/home');
  };

  if (isHome) {
    return  (
      <Link to={`/city/${city.toLowerCase()}`} className="Card">
        <div className="ActionButtonWrap">
          <button
            className="ActionButton ActionButtonEdit"
            onClick={handleOnEdit}
          > edit </button>
          <button
            className="ActionButton ActionButtonDelete"
            onClick={handleOnDelete}
          > ✖ </button>
        </div>
        <div className="MainInfo">
          <img className="Icon"
               src={icon}
               alt="icon"/>
          <div className="Title"> {name} </div>
          <div className="Description"> {text} </div>
          <div className="Temperature"> {temp_c.toFixed()} </div>
        </div>
        <div className="Information">
          <div> Влажность: {humidity} </div>
          <div> Ощущается как: {feelslike_c.toFixed()}° </div>
        </div>
      </Link>
    )
  }
    return  (
      <div className="Card">
        <div className="ActionButtonWrap">
          <button
            className="ActionButton ActionButtonEdit"
            onClick={handleOnEdit}
          > edit </button>
          <button
            className="ActionButton ActionButtonDelete"
            onClick={handleOnDelete}
          > ✖ </button>
        </div>
        <div className="MainInfo">
          <img className="Icon"
               src={icon}
               alt="icon"/>
          <div className="Title"> {name} </div>
          <div className="Description"> {text} </div>
          <div className="Temperature"> {temp_c.toFixed()} </div>
        </div>
        <div className="Information">
          <div> Влажность: {humidity} </div>
          <div> Ощущается как: {feelslike_c.toFixed()}° </div>
        </div>
      </div>
    )
};

export const Card = memo(CardNoMemo);
