import './App.css';
import React, {useState} from 'react';
import Navbar from './components/Navbar';

function App() {
  const [color, setColor] = useState('#F1f5f8');

  const simpleColors = [
    "red",
    "green",
    "purple",
    "blue",
    "yellow",
    "yellow",
    "lime",
    "gold",
  ];
  const hexColors = [
    "#A0A03C",
    "#A5279D",
    "#3364E3",
    "#2F02CC",
    "#EF3838",
    "#454EEE",
    "#0596C6",
    "#3E8C3E",
    "#978B8A",
    "#947782",
  ];

  const changeBtn = () => {
    if(color[0] ==='#') {
      setColor(hexColors[Math.floor(Math.random() * hexColors.length)]);
    }
    else {
      setColor(simpleColors[Math.floor(Math.random() * simpleColors.length)])
    }
  }
  return (
    <div className="container">
        <Navbar setColor={setColor} color={color} simpleColors={simpleColors} hexColors={hexColors} />
        <div style={{backgroundColor: color}} className="main">
            <div className="bg-color">
                Background Color : <span className="color-number">{color}</span>
            </div>
            <button onClick={changeBtn} className="btn">click me</button>
        </div>
    </div>
  );
}

export default App;
