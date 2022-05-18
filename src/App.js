import './App.css';
import React from 'react';
import { Input } from './Input';
import { CardList } from './CardList';
import { useCitiesList } from './hooks/useCitiesList.js';

export const GlobalContext = React.createContext();

function App () {
  const [state, dispatch] = useCitiesList();
  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
    <div className="Main">
      <Input />
       <CardList />
    </div>
    </GlobalContext.Provider>
  );
}

export default App;
