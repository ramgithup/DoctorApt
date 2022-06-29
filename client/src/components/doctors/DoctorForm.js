import React from 'react'
import { useState } from 'react'
import { Form, Button } from 'react-bootstrap'

const DoctorForm = ({addDoctor}) => {
  const [doctor, setDoctor] = useState({
    first_name: '',
    last_name: '',
    image: '',
    specicialist: ' ',
  })
  const handleSubmit = (e) => {
    e.preventDefault();
    addDoctor(doctor)
    setDoctor({
      first_name: '',
      last_name: '',
      image: '',
      specicialist: ''
    })
  }
  return (
    <>
      <h3> Add Doctor</h3>

      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>first Name:</Form.Label>
          <Form.Control
            name="first name"
            value={doctor.first_name}
            onChange={(e) =>
              setDoctor({ ...doctor, first_name: e.target.value })
            }
            placeholder="first name"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Last name:</Form.Label>
          <Form.Control
            name="last name"
            value={doctor.last_name}
            onChange={(e) =>
              setDoctor({ ...doctor, last_name: e.target.value })
            }
            placeholder="last_name"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>image url:</Form.Label>
          <Form.Control
            name="image"
            value={doctor.image}
            onChange={(e) => setDoctor({ ...doctor, image: e.target.value })}
            placeholder="image"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Specialist:</Form.Label>
          <Form.Control
            name="specicialist"
            value={doctor.specicialist}
            onChange={(e) =>
              setDoctor({ ...doctor, specicialist: e.target.value })
            }
            placeholder="specicialist"
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

export default DoctorForm;
