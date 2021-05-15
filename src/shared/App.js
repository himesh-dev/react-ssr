import React from 'react';
import './styles.css';
import image from '../assets/imageIcon.png';
import svgIcon from '../assets/expired_page.svg';

const App = () => {
  const clickHandler = () => {
    alert('button clicked');
  };
  return (
    <div>
      <button onClick={clickHandler} className="button">
        clickme128
      </button>
      <img src={image} height={100} widht={'auto'} alt="expired" />
      <img src={svgIcon} height={100} widht={'auto'} alt="expired" />
    </div>
  );
};

export default App;
