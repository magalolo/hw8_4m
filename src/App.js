import React, { useState } from 'react';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [names, setNames] = useState([]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleButtonClick = () => {
    if (inputValue.trim()) { 
      setNames([...names, inputValue]); 
      setInputValue(''); 
    }
  };

  return (
    <div className="App">
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <button onClick={handleButtonClick}>Add name</button>
      <div>
        {names.map((name, index) => (
          <p key={index}>{name}</p>
        ))}
      </div>
    </div>
  );
}

export default App;
