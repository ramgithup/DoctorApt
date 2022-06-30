import { useParams, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import AppointmentList from './AppointmentList'
import { Modal } from 'react-bootstrap'
import { MainBtn } from '../shared/styles/Style'
import AppoinmentForm from './AppointmentForm'

const Appointments = () => {
  const [appointments, setAppointments] = useState([])
  const { doctoreId } = useParams()
  const location = useLocation()
  const { firstName } = location.state
  const [adding, setAdd] = useState(false)

  useEffect(() => {
    axios
      .get(`/api/doctors/${doctoreId}/appointments`)
      .then((res) => {
        setAppointments(res.data)
      })
      .catch((err) => console.log(err))
  }, [])

  const addApp = (appointment) => {
    axios
      .post(`/api/doctors/${doctoreId}/appointments`, { appointment })
      .then((res) => {
        setAppointments([...appointments, res.data])
      })
      .catch((err) => console.log(err))
  }
  return (
    <>
      <MainBtn onClick={() => setAdd(true)}>+</MainBtn>

      <Modal show={adding} onHide={() => setAdd(false)}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <AppoinmentForm addApp={addApp} />
        </Modal.Body>
      </Modal>
      <h2>All Appointments for {firstName}</h2>
      <AppointmentList appointments={appointments} />
    </>
  )
}

export default Appointments
