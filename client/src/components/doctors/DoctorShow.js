import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Centered, BtnCrud } from '../shared/styles/Style'
import { RoundPicture, Buttons } from '../shared/styles/Style'
import { InfoDoctor } from '../shared/styles/Style'
import Trash from '../images/Trash.svg'
import heartPulse from '../images/heartPulse.svg'
import edit from '../images/edit.svg'
import {Modal} from 'react-bootstrap';
import DoctorForm from './DoctorForm';
import {DoctorConsumer} from '../../providers/DoctorProvider';

const DoctorShow = ({UpdateDoctor, deleteDoctor}) => {
  const { id } = useParams()
  const [doctor, setDoctor] = useState({
    first_name: '',
    last_name: '',
    image: '',
    specicialist: ' ',
  })
  const { first_name, last_name, image, specicialist } = doctor
  const [doctorUsers, setDoctorUsers] = useState([])
  const [editing, setEdit] = useState(false)

  useEffect(() => {
    axios
      .get(`/api/doctors/${id}`)
      .then((res) => setDoctor(res.data))
      .catch((err) => console.log(err))
  }, [])

  useEffect(() => {
    axios
      .get(`/api/doctors/${id}/doctorUsers`)
      .then((res) => setDoctorUsers(res.data))
      .catch((err) => console.log(err))
  }, [])

  return (
    <>
      <Centered>
        <RoundPicture src={image} width="600px"></RoundPicture>
        <InfoDoctor>
          <h2>
            Dr. {first_name} {last_name}
          </h2>
          <h5>{specicialist} </h5>
        </InfoDoctor>

        <Buttons>
          <BtnCrud className="btn-crud" onClick={() => setEdit(true)}>
            <img src={edit} alt="yo edit btn" />
          </BtnCrud>

          <Modal show={editing} onHide={() => setEdit(false)}>
            <Modal.Header closeButton></Modal.Header>
            <Modal.Body>
              <DoctorForm
                id={id}
                first_name={first_name}
                last_name={last_name}
                image={image}
                specicialist={specicialist}
                setEdit={setEdit}
                UpdateDoctor={UpdateDoctor}
              />
            </Modal.Body>
          </Modal>

          <Link to={`/${id}/appointments`} state={{ firstName: first_name }}>
            <BtnCrud className="btn-crud">
              <img src={heartPulse} alt="yo heart btn" />
            </BtnCrud>
          </Link>
          <BtnCrud className="btn-crud" onClick={() => deleteDoctor(id)}>
            <img src={Trash} alt="yo trash btn" />
          </BtnCrud>
        </Buttons>

        <h1 style={{marginTop: " 40px", textAlign:"center"}}>All of the Appointment for the doctor</h1>
      <ul>
        { doctorUsers.map( du => 
          <>
            <li>{du.first} {du.last}</li>
            <hr />
          </>  
        )}
      </ul>
      </Centered>
    </>
  )
}

const ConnectedDoctors =(props)=>(
  <DoctorConsumer>
  {value => <DoctorShow {...props} {...value}/>}
  </DoctorConsumer>
 
 )
 export default ConnectedDoctors;
