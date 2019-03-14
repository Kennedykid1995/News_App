import React, { Component } from "react";
import "./App.css";
import { Route } from "react-router-dom";
import ImgMediaCard from "./components/cards/card";
import Home from "./components/pages/home"; 
import Article from "./components/pages/article"
import NavBar from "./components/navigation/navbar";

class App extends Component {
  render() {
    return (
      <div className="App">
      <NavBar/>
        <Route exact path="/" render={props => <Home {...props}/>}/>
        <Route path="/article" render={props => <Article {...props} />} />
      </div>
    );
  }
}

export default App;
