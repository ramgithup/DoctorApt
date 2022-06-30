import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from 'axios';
import { Centered , BtnCrud} from '../shared/styles/Style'
import { RoundPicture, Buttons } from '../shared/styles/Style'
import {InfoDoctor} from '../shared/styles/Style'
import Trash from '../images/Trash.svg'
import heartPulse from '../images/heartPulse.svg'
import edit from '../images/edit.svg'

const UserShow = () => {
  const { id } = useParams()
  const [user, setUser] = useState({ first: '', last: '', image: '' , phone: ''})
  const { first, last, image, phone } = user 

  useEffect( () => {
    axios.get(`/api/users/${id}`)
      .then( res => {
        setUser(res.data)
      })
      .catch( err => console.log(err))
  }, [])

  return (
    <>

    <Centered>
    <InfoDoctor style={{padding: '20px',display: 'flex',flexDirection: 'column', gap : '10px'}}>
      <h1>
         {first} {last}
      </h1>
      <h4>{phone} </h4>
      <p> Lorem Ipsum is simply dummy text of the printing<br/> 
      and typesetting industry. Lorem Ipsum has been <br/> the 
      industry's standard dummy text ever since<br/>  the 1500s</p>
    </InfoDoctor>
    <Buttons>
      <BtnCrud className ="btn-crud">
        <img src={edit}  alt="yo edit btn"/>
      </BtnCrud>
      <BtnCrud className ="btn-crud">
        <img src={Trash}  alt="yo trash btn"/>
      </BtnCrud>
    </Buttons>
  </Centered>


      
    </>
  )
}

export default UserShow;