import React, { useState, useRef } from 'react';
import '../App.css';

export const Input = ({ dispatch }) => {
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef(null);

  const handleOnClick = () => {
    if(inputValue.length) {
       dispatch({
        type: 'ADD_CITY',
        payload: inputValue,
      })
      setInputValue('');
      inputRef.current.focus();
    }
  }

  const handleOnChange = (event) => {
    setInputValue(event.target.value);
  }

  return (
    <div className="InputWrap">
    <input className="Input"
           onChange={handleOnChange}
           value={inputValue}
    ref={inputRef}/>
    <button className="Button"
            onClick={handleOnClick}> + </button>
    </div>
)
}

