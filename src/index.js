import React from 'react';  // core package -- we'' use this to develop components 
import ReactDOM from 'react-dom'; // responsible rendering the components
import './index.css';
import App from './App'; // component import 
import * as serviceWorker from './serviceWorker';

// Step 1
import { createStore } from 'redux';

// Step 5: 
//let’s import the combinedReducer 
//and pass it to the store as an argument.
import rootReducers from './reducers'; 

// Step 6: Make the store data available to the entire app
import { Provider } from 'react-redux'; 
//Definition: The Provider component uses something 
    //called as React Context which allows you to pass the 
    //store object to any components 
    //that needs to access it without the need to pass props.
    //Provider should be imported from react-redux 

// Step 14 & 14.1
//install the following packages npm i redux-logger redux-thunk

// Step 14.2 then
import logger from 'redux-logger'; // npm i redux-logger 
import thunk from 'redux-thunk';  //npm i redux-thunk

// step 14.3 use redux-thunk middleware for async actions
import { applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

// Step 2: Exec createStore() method and save it in a variable 
const store = createStore(rootReducers, composeWithDevTools(applyMiddleware(thunk, logger)) );  //this needs a special argument called 'reducer'

// Step 3: Refer reducers/contactReducer.js 

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App /> 
    </Provider> 
  </React.StrictMode>
  // what comp to be rendered
  ,
  document.getElementById('root')  // where the component should be injected 
); 

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
