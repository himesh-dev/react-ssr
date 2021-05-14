import React from 'react';
import './styles.css';

const App = () => {
  const clickHandler = () => {
    alert('button clicked');
  };
  return (
    <div>
      <button onClick={clickHandler} className="button">
        clickme128
      </button>
    </div>
  );
};

export default App;
