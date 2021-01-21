import React, { Component } from 'react';
import './App.css';
import Header from './Header/Header';
import MadLibsOutput from './MadLibsOutput/MadLibsOutput';
import MadLibsInput from './MadLibsInput/MadLibsInput';

function App() {
  return (
    <div className="App">
        <Header
          appName = 'Mad Libs' 
        />
      <div className="Container">
        <div className="Row">
          <div className="HalfColumn">
            <MadLibsInput/>
            <MadLibsInput/>
            <MadLibsInput/>
            <MadLibsInput/>
          </div>
          <div className="HalfColumn">
            <MadLibsOutput/>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default App;
