import React, { Component } from 'react';
import { connect } from 'react-redux';
import Tickets from './Tickets/Tickets.js';
import { getBookings } from '../../services/ticketsService';

class TicketsList extends Component {
  constructor(){
    super();
    this.state = {
      searchInput: ''
    }
  }

  filterData = (e) => {
    this.setState(
      {
        searchInput: e.target.value
      }
    )
  }

  componentDidMount(){
    console.log('Inside componentDidMount');
    this.props.getEvents();
  }

  render () {
    if(this.props.ticketsList) {
      return (
        <div>
          <h1>Ticket List</h1>
          <div>
            <div className='container text-left'>
              <div className='row'>
                <div className='col-md-12'>
                  <form className="ticketsList"> 
                    <input required type="text"
                      placeholder="SEARCH EVENTS"
                      className='form-control'
                      onChange={this.filterData.bind(this)}
                       /><br />
                  </form>
                  <Tickets searchInput={this.state.searchInput} ticketsList = {this.props.ticketsList}/>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      )
    } else 
      return null
    
  }
}

const mapDispatchToProps = (dispatch) => {
  console.log(dispatch);
  return {
    getEvents: () => dispatch(getBookings())
  };
};

// converts state to the read-only props
const mapStateToProps = (state) => {
  return {
    ticketsList: state.contacts.ticketsList,

  }
} 

export default connect(mapStateToProps, mapDispatchToProps)(TicketsList);