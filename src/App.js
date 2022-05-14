import './App.css';
import React from 'react';
import { Input } from './Input';
import { CardList } from './CardList';
import { useCitiesList } from './hooks/useCitiesList.js';

function App () {
  const [citiesList, setCitiesList] = useCitiesList();
  return (
    <div className="Main">
      <Input setCitiesList={setCitiesList}/>
      {citiesList && <CardList citiesList={citiesList}/>}
    </div>
  );
}

export default App;
