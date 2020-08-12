import React from 'react';
import { Link } from 'react-router-dom';

const TicketCard = (props) => {

  // props -- are read-only objects
  //console.log(props);

  return(
    <div className="col-md-3">
      <div className='card'>
        { <div className="card-header">
          {props.name}
          <span className="badge badge-warning float-right">
            {props.travelDate}
          </span>
        </div>}
        <div className="card-body">
          <div><img width='80px' height='80px' src={props.image} /></div>
          <p className="card-text">Seats Available - {props.SeatsAvaliable}</p>
          {props.SeatsAvaliable > 0 ? <Link className="btn btn-primary" to={`/ticketsList/${props.name}`}> Book Now </Link> : <a className="btn btn-primary btn-danger"> SOLD OUT </a>}
        </div>
        {/* <div className="card-footer text-muted">
          {props.time}
        </div> */}
      </div>
    </div>
  )
}

export default TicketCard;