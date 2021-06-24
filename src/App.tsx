import React from 'react';
import Square from './components/Square';
import './App.css';

function App() {
  return (
    <div className="App">
        hello world
        <Square value={1}/>
        <button onClick={() => test()}>Press Me</button>
    </div>
  );
}


const test = () => console.log("message")

export default App;
