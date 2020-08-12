import React from 'react';
import TicketCard from './TicketCard/TicketCard';

const Tickets = (props) => {
  let contacts;
  let data = props.ticketsList
  let error;

  if (props.searchInput) {
    data = props.ticketsList.filter(inp => inp.name === props.searchInput);
    if (data && data.length === 0) {
      error = <div>No Results found</div>
    } else {
      error = ''
    }
  } 

  if(data && data.length) {
    contacts = data.map((tickets, index) => {
      return (
        <TicketCard 
          name={tickets.name} image={tickets.image} travelDate={tickets.travelDate} SeatsAvaliable={tickets.SeatsAvaliable}  >
          </TicketCard>
      )
    })
  }

  return(
    <div className="row">
      {error ? error : contacts}
    </div>
  )
}

export default Tickets;
