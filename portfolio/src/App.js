import React from 'react';
import { useHistory } from 'react-router-dom';


import './App.css';

function App() {

  // re-route to a different page upon click
  const history = useHistory();
  const routeChange = () =>{ 
    let path = `newPath`; 
    history.push(path);
  }
  return (
    <div className="app">
      <h1 className="welcome message">Hello World</h1>
      <button className="contactBtn" onClick={routeChange}>Contact</button>
      <button className= "aboutBtn" onClick={routeChange}>ABOUT ME</button>

    </div>
  );
}

export default App;
