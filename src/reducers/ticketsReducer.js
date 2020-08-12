
import {TICKETS_LIST, GET_EVENT, BOOKING_SUBMIT } from "../actions/types";
import { updateBookingData } from "../utils/helper"

const contactReducer = (state = {}, action) => {
  let payload = action.payload
  switch(action.type) {  
    case TICKETS_LIST:
      return action.ticketsList;
    case GET_EVENT:
      let newState = {...state}
      return newState.ticketsList.filter(i => i.name === payload)
    case BOOKING_SUBMIT:
      return updateBookingData(state, payload)
    default:
      return state;
  }
}
export default contactReducer;
