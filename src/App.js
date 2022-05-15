import './App.css';
import React from 'react';
import { Input } from './Input';
import { CardList } from './CardList';
import { useCitiesList } from './hooks/useCitiesList.js';

function App () {
  const [citiesList, dispatch] = useCitiesList();
  return (
    <div className="Main">
      <Input dispatch={dispatch}/>
      {citiesList && <CardList citiesList={citiesList}/>}
    </div>
  );
}

export default App;
