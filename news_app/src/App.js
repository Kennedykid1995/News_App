import React, { Component } from 'react';
import './App.css';
import BasicSection from './components/sections/basic-section';
import SlideSection from './components/sections/slide-section'; 
class App extends Component {
  render() {
    return (
      <div className="App">
      <BasicSection />
      <SlideSection />
      <BasicSection />
      <SlideSection />
      </div>
    );
  }
}

export default App;
