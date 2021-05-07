import React from 'react';

const App = () => {
  const clickHandler = () => {
    alert('button clicked');
  };
  return (
    <div>
      <button onClick={clickHandler}>clickme128</button>
    </div>
  );
};

export default App;
