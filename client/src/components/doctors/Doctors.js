import { useState, useEffect } from 'react'
import axios from 'axios'
import CourseList from './DoctorsList'
import DoctorForm from './DoctorForm'
import { Modal } from 'react-bootstrap'
import {MainBtn} from '../shared/styles/Style'

const Doctors = () => {
  const [doctors, setDoctors] = useState([])
  const [adding, setAdd] = useState(false)

  useEffect(() => {
    axios.get('/api/doctors').then((res) => {
      setDoctors(res.data).catch((err) => console.log(err))
    })
  }, [])

  const addDoctor = (doctor) => {
    axios
      .post('/api/doctors', { doctor })
      .then((res) => {
        setDoctors([...doctors, res.data])
      })
      .catch((err) => console.log(err))
  }

  const UpdateDoctor = (id, doctor) => {
    axios.put(`/api/doctors/${id}`, { doctor })
      .then( res => {
        let newUpdatedDoctor = doctors.map( d => {
          if (d.id === id) {
            return res.data 
          }
          return d
        })
        setDoctors(newUpdatedDoctor)
      })
      .catch( err => console.log(err) )
  }

  const deleteDoctor = (id) => {
    axios.delete(`/api/doctors/${id}`)
      .then(res => {
        setDoctors(doctors.filter( d => d.id !== id ))
      })
      .catch( err => console.log(err) )
  }

  return (
    <>
    <MainBtn onClick={() => setAdd(true)} >+</MainBtn>

    <Modal show={adding} onHide={() => setAdd(false)}>
      <Modal.Header closeButton>
      </Modal.Header>
      <Modal.Body>
      <DoctorForm addDoctor={addDoctor} />
      </Modal.Body>
    </Modal>
      
      <CourseList doctors={doctors} />
    </>
  )
}

export default Doctors
