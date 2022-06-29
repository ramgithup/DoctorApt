import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Centered , BtnCrud} from '../shared/styles/Style'
import { RoundPicture, Buttons } from '../shared/styles/Style'
import {InfoDoctor} from '../shared/styles/Style'
import Trash from '../images/Trash.svg'
import heartPulse from '../images/heartPulse.svg'
import edit from '../images/edit.svg'

const DoctorShow = () => {
  const { id } = useParams()
  const [doctor, setDoctor] = useState({
    first_name: '',
    last_name: '',
    image: '',
    specicialist: ' ',
  })
  const { first_name, last_name, image, specicialist } = doctor
  useEffect(() => {
    axios
      .get(`/api/doctors/${id}`)
      .then((res) => setDoctor(res.data))
      .catch((err) => console.log(err))
  },[])
  return (
    <>
      <Centered>
        <RoundPicture src={image} width="600px"></RoundPicture>
        <InfoDoctor>
          <h1>
            Dr. {first_name} {last_name}
          </h1>
          <h4>{specicialist} </h4>
        </InfoDoctor>
        <Buttons>
          <BtnCrud className ="btn-crud">
            <img src={edit}  alt="yo edit btn"/>
          </BtnCrud>
          <BtnCrud className ="btn-crud">
            <img src={heartPulse} alt="yo heart btn" />
          </BtnCrud>
          <BtnCrud className ="btn-crud">
            <img src={Trash}  alt="yo trash btn"/>
          </BtnCrud>
        </Buttons>
      </Centered>
    </>
  )
}

export default DoctorShow