import React from 'react'
import { ListGroup } from "react-bootstrap";

const Appointment = ({appdate, apptime , user, why  ,  user_id, doctor_id, appointments}) => {
  const displayAppointment = (id) => {
    let fullName = ''
    appointments.map( u => {
      if (u.id === id) {
        fullName = u.first + " " + u.last 
      }
    })
    return fullName
  }
  return (
    <>
    <ListGroup.Item>
        {displayAppointment(user_id)}
        <button>edit</button>
        <button>delete</button>
      </ListGroup.Item>
    </>
  )
}

export default Appointment;
