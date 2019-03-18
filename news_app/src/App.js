import React from "react";
import "./App.css";
import { Route, withRouter } from "react-router-dom";
import Home from "./components/pages/home"; 
import Article from "./components/pages/article"
import NavBar from "./components/navigation/navbar";

class App extends React.Component {

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