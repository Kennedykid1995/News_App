import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import $ from 'jquery';
import App from './App';
import {BrowserRouter as Router} from "react-router-dom";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware} from 'redux';
import reducers from './reducers/reducer';
import thunk from 'redux-thunk';
const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(  
    <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);
