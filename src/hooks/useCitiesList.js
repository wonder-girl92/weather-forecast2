import { useEffect, useReducer } from 'react';

const initialState = {
  citiesList: JSON.parse(localStorage.getItem('citiesList')) || [],
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_CITY': {
      const newState = {...state, citiesList: [...state.citiesList, action.payload]};
      return newState;
    }
    default:
      return initialState;
  }
}

export const useCitiesList = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { citiesList } = state;

  useEffect(() => {
    localStorage.setItem('citiesList', JSON.stringify(citiesList));
  }, [citiesList]);
  return [citiesList, dispatch];
}

