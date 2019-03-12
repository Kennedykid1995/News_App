import React from 'react'
import { render } from 'react-dom'
import './index.css';
import { Provider } from 'react-redux'
import App from './App';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/rootReducer'

const store = createStore(
    rootReducer,
    applyMiddleware(thunk, logger)
  );
  
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)