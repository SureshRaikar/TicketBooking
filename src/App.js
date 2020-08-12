import React from 'react';   // to develop comp 
import './App.css';
import Header from './components/shared/Header/Header';
import TicketsList from './components/Events/TicketsList';
import TicketBooking from './components/Events/TicketBooking';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <div className='topMargin'>
          <Switch>
            <Route exact path='/' component={TicketsList}></Route>
            <Route exact path='/ticketsList' component={TicketsList}></Route>
            <Route path='/ticketsList/:event' component={TicketBooking}></Route>
            <Route path='/ticketBooking' component={TicketBooking}></Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App; 
