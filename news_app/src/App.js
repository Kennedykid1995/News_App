import React, { Component } from "react";
import "./App.css";
import { Route, withRouter } from "react-router-dom";
import Home from "./components/pages/home"; 
import Article from "./components/pages/article"
import NavBar from "./components/navigation/navbar";
import { connect } from 'react-redux';
import NEWS_API from './config_keys';


const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${NEWS_API}`; 

class App extends Component {
  render() {
    return (
      <div className="App">
      <NavBar />
        <Route exact path="/" component={Home}/>
        <Route path="/article" component={Article}/>
      </div>
    );
  }
}
export default withRouter(App);
