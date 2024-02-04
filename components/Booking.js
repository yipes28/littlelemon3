import React from 'react';
import logo from ' ...images.logo.svg'
const Booking  =(props) => {
    return(
      <BookingForm availableTimes={props.availableTimes} dispatch={props.dispatch} SubmitForm={props.SubmitForm} />
    );

    };

    export default Booking;