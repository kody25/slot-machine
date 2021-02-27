import './App.css';
import React from 'react';
import SlotM from './SlotM';

const App = () => {
  return (
    <>
      <h1 className="head">Welcome to 🎰<span className="head-slot"> Slot Machine Game </span>🎰</h1>
      <div className="center">
        <div className="slot-machine">
          <SlotM x = "🍎" y = "🥭" z = "🍌" />
          <SlotM x = "🚲" y = "🛥️" z = "🚢"/>
          <SlotM x = "💾" y = "💻" z = "☎️" />
          <SlotM x = "😄" y = "😿" z = "😆"/>
          <SlotM x = "😄" y = "😄" z = "😄"/>
        </div>
      </div>
    </>
  );
}

export default App;
