import React from 'react'
import { ListGroup } from 'react-bootstrap';
import Appointment from './Appointment';

const AppointmentList = ({appointments}) => {
  return (
    <>
    <ListGroup variant="flush">
      { appointments.map( a => 
        <Appointment 
          key={a.id}
          {...a}
          
        />
      )}

    </ListGroup>
      
    </>
  )
}

export default AppointmentList;
