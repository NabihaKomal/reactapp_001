import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Room from './Room';

function App() {
  let[number, setNumber] = useState(45);
  return (
    <div>
      Hello World
      <Room></Room>
    </div>
  );
}

export default App;
