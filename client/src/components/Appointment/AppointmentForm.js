import React from 'react'
import { useState } from 'react'
import { Form, Button } from 'react-bootstrap'

const AppointmentForm = ({addApp}) => {
  const [appt, setAppt] = useState({
    appdate: '',
    apptime: '',
    user: '',
    why: ' ',
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    addApp(appt)
    setAppt({
      appdate: '',
    apptime: '',
    user: '',
    why: ' '
    })
  }
  return (
    <>
    <h3> Add Doctor</h3>

      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label> appointment Date</Form.Label>
          <Form.Control
            name="first name"
            value={appt.appdate}
            onChange={(e) =>
              setAppt({ ...appt, appdate: e.target.value })
            }
            placeholder="date"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Appointment time</Form.Label>
          <Form.Control
            name="last name"
            value={appt.apptime}
            onChange={(e) =>
              setAppt({ ...appt, apptime: e.target.value })
            }
            placeholder="time"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>user</Form.Label>
          <Form.Control
            name="image"
            value={appt.user}
            onChange={(e) => setAppt({ ...appt, user: e.target.value })}
            placeholder="user name"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Reason:</Form.Label>
          <Form.Control
            name="specicialist"
            value={appt.why}
            onChange={(e) =>
              setAppt({ ...appt, why: e.target.value })
            }
            placeholder="reason"
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      
    </>
  )
}

export default AppointmentForm;
