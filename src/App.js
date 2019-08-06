import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <img src={logo} className="Logo Spin Spacing" alt="logo" />
      <div className="Square Spacing Spin" alt="Blue Square"></div>
      <div className="Rectangle Spacing Spin-Slow" alt="Red Rectangle"></div>
      <div className="Circle Spacing Spin" alt="Green Circle"></div>
    </div>
  );
}

export default App;
