import { TICKETS_LIST } from "../actions/types";
import ticketdata from './TicketsData.json';


export const getBookings = () => {
  return (dispatch) => {
    dispatch({
      type: TICKETS_LIST,
      ticketsList: ticketdata
    })
  }
}