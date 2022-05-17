import './App.css';
import React from 'react';
import { Input } from './Input';
import { CardList } from './CardList';
import { useCitiesList } from './hooks/useCitiesList.js';

function App () {
  const [state, dispatch] = useCitiesList();
  const { inputValue, citiesList, editingCity } = state;
  return (
    <div className="Main">
      <Input dispatch={dispatch}
             inputValue={inputValue}
              editingCity={editingCity}
      />
       <CardList
        citiesList={citiesList}
      dispatch={dispatch}/>
    </div>
  );
}

export default App;
