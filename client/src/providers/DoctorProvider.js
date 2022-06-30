
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export const DoctorContext = React.createContext()

export const DoctorConsumer = DoctorContext.Consumer;

const DoctorProvider = ({ children }) => {
  const [doctors, setDoctors] = useState([])

  const navigate = useNavigate()

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
    axios
      .put(`/api/doctors/${id}`, { doctor })
      .then((res) => {
        let newUpdatedDoctor = doctors.map((d) => {
          if (d.id === id) {
            return res.data
          }
          return d
        })
        setDoctors(newUpdatedDoctor)
        navigate('/doctors')
        window.location.reload()
      })
      .catch((err) => console.log(err))
  }

  const deleteDoctor = (id) => {
    axios
      .delete(`/api/doctors/${id}`)
      .then((res) => {
        setDoctors(doctors.filter((d) => d.id !== id))
        navigate('/doctors')
        window.location.reload()
      })
      .catch((err) => console.log(err))
  }

  return (
    <DoctorContext.Provider
      value={{
        doctors,
        addDoctor,
        UpdateDoctor,
        deleteDoctor,
      }}
    >
      {children}
    </DoctorContext.Provider>
  )
}

export default DoctorProvider
