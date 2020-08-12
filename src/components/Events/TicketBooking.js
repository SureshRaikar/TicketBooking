import React, { Component } from 'react';
import { connect } from 'react-redux';

class TicketBooking extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      usernameErrorMessage : '',
      emailErrorMessage : '',
      avlSeatsErrorMessage: '',
      displaySubmitMsg: false,
      seats: 1,
      attendees: [{id: 2,name: 'Attendee 2'},{id: 3,name: 'Attendee 3'},{id: 4,name: 'Attendee 4'},{id: 5,name: 'Attendee 5'},{id: 6,name: 'Attendee 6'}]
    }
  }

  componentDidMount(){
    this.props.getEventByname(this.props.match.params.event)
  }

  updateFormHandler = (e) => {
    let self = this
    e.preventDefault();
    const updatableContactData = {
      event: self.props.match.params.event,
      userName: this.getName.value,
      email: this.getEmail.value,
      seats: this.getSeats.value,
      attendee2: this.getAttendee2 && this.getAttendee2.value ? this.getAttendee2.value : undefined,
      attendee3: this.getAttendee3 && this.getAttendee3.value ? this.getAttendee3.value : undefined,
      attendee4: this.getAttendee4 && this.getAttendee4.value ? this.getAttendee4.value : undefined,
      attendee5: this.getAttendee5 && this.getAttendee5.value ? this.getAttendee5.value : undefined,
      attendee6: this.getAttendee6 && this.getAttendee6.value ? this.getAttendee6.value : undefined,
    }

    if(!self.state.usernameErrorMessage && !self.state.emailErrorMessage && !self.state.avlSeatsErrorMessage) {
      this.props.submitDetails(updatableContactData);
      self.setState({...self.state, displaySubmitMsg: true })
    }
  }

  validateUsername = (e, attendeeDetails) => {
    let self = this
    let name = e.target.value
    if(!name) {
      self.setState({...self.state, usernameErrorMessage: 'Please enter Username' })
    } else if (name) {
      let letters = /^[a-zA-Z-,]+(\s[a-zA-Z-, ])*$/;
      if(!name.match(letters)) {
        self.setState({...self.state, usernameErrorMessage: 'Only letters and spaces are allowed' })
      } else 
        self.setState({...self.state, usernameErrorMessage: '' })
    }
  }

  validateEmail = (e) => {
    let self = this
    let email = e.target.value
    if(!email) {
      self.setState({...self.state, emailErrorMessage: 'Please Enter Email' })
    } else if (email) {
      let letters = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if(!email.match(letters)) {
        self.setState({...self.state, emailErrorMessage: 'Invalid Email' })
      } else 
        self.setState({...self.state, emailErrorMessage: '' })
    }
  }

  validateQuantity = (e) => {
    let self = this
    let qty = e.target.value
    if(!qty) {
      self.setState({...self.state, avlSeatsErrorMessage: 'Please Enter Seats' })
    } else if(qty) {
      if(qty > self.props.event[0].SeatsAvaliable )
        self.setState({...self.state, avlSeatsErrorMessage: 'Number of seats selected is more than available seats' })
      else {
        self.setState({...self.state, avlSeatsErrorMessage: '', seats: qty })
      }
      
    }
  }

  goBack = () => {
    this.props.history.goBack()
  }

  render () {
    let inp = null;
    if(this.state.seats > 1) {
      inp = this.state.attendees.map((a, key) => {
        if( (key + 2) <= this.state.seats ) {
          return (
            <div>{a.name} :
            {a.id === 2 ? <div><input required type="text" placeholder="" ref={(input) => this.getAttendee2 = input} className='form-control' />  <br /></div>: 
            a.id === 3 ? <div><input required type="text" placeholder="" ref={(input) => this.getAttendee3 = input} className='form-control' /> <br /></div>: 
            a.id === 4 ? <div><input required type="text" placeholder="" ref={(input) => this.getAttendee4 = input} className='form-control' /> <br /></div>:  
            a.id === 5 ? <div><input required type="text" placeholder="" ref={(input) => this.getAttendee5 = input} className='form-control' /> <br /></div>:  
            a.id === 6 ? <div><input required type="text" placeholder="" ref={(input) => this.getAttendee6 = input} className='form-control' /> <br /></div>: 
            ''}</div>
          )
        }
      })
    }

    if(this.state.displaySubmitMsg) {
      return (
        <div> Tickets booked </div>
      )
    }
    else if(this.props.event && this.props.event.length>0) {
      return (
        <div>
          <h1>{this.props.event[0].name}</h1>
          <h2> No.of available Seats : {this.props.event[0].SeatsAvaliable} </h2>
          <div>
            <div className='container text-left'>
              <div className='row'>
                <div className='col-md-12'>
                  <form onSubmit={this.updateFormHandler}> 
                    <div> Username : <input required type="text" placeholder="" ref={(input) => this.getName = input}  className='form-control' onChange={this.validateUsername.bind(this)}/> <span className='text-danger'>{this.state.usernameErrorMessage ? this.state.usernameErrorMessage : ''}</span></div><br />
                    <div> Email :  <input required type="text" placeholder=""  ref={(input) => this.getEmail = input} className='form-control' onChange={this.validateEmail.bind(this)}/> <span className='text-danger'>{this.state.emailErrorMessage ? this.state.emailErrorMessage : ''}</span></div><br />
                    <div> No.of Seats :  
                      <select required type="text" ref={(input) => this.getSeats = input} onChange={this.validateQuantity.bind(this)} placeholder="Select Seat quantity" >
                        <option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option>
                      </select>
                      <span className='text-danger'>{this.state.avlSeatsErrorMessage ? this.state.avlSeatsErrorMessage : ''}</span>
                    </div><br />
                    {inp ? <div> Name of other attendees : {inp} </div> : ''}
                    <button className='btn btn-primary' type='submit'>Save Changes</button>
                    <button className='btn btn-primary btn-danger btn-cancel' type='cancel' onClick={this.goBack.bind(this)}>Cancel</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
    return null
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getEventByname: (event) => dispatch({type: 'GET_EVENT', payload: event }),
    submitDetails: (formData) => dispatch({type: 'BOOKING_SUBMIT', payload: formData})
  };
};

// converts state to the read-only props
const mapStateToProps = (state) => {
  return {
    event: state.tickets,

  }
} 

export default connect(mapStateToProps, mapDispatchToProps)(TicketBooking);