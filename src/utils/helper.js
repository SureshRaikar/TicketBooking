export const updateBookingData = (state, payload) => {
    state[0].SeatsAvaliable =  parseInt(state[0].SeatsAvaliable) - parseInt(payload.seats)
    state[0].passengerDetails = [{
    'username': payload.userName,
    'email': payload.email,
    'seats': payload.seats
    }]
    if (payload.attendee2)  state[0].passengerDetails.attendee2 = payload.attendee2
    if (payload.attendee3)  state[0].passengerDetails.attendee3 = payload.attendee3
    if (payload.attendee4)  state[0].passengerDetails.attendee4 = payload.attendee4
    if (payload.attendee5)  state[0].passengerDetails.attendee5 = payload.attendee5
    if (payload.attendee6)  state[0].passengerDetails.attendee6 = payload.attendee6
    return state
}
