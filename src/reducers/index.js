// Step 4: 
// work on combining all reducers for the entire app
// and have the following code 

//Step 4.1: Combining Reducers using Redux's combineReducers
import {combineReducers} from 'redux';

//Step 4.2 loading all reducers
import ticketsReducer from './ticketsReducer'; 

//Step 4.3 combine all reducers into one big object for store
const rootReducers = combineReducers({
  tickets: ticketsReducer
});

//Step 4.4 exporing the rootReducer -- that is the combined reducer
export default rootReducers;

// Step5: work on index.js 