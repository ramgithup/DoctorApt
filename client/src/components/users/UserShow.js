import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from 'axios';
import { Centered , BtnCrud} from '../shared/styles/Style'
import { RoundPicture, Buttons } from '../shared/styles/Style'
import {InfoDoctor} from '../shared/styles/Style'
import Trash from '../images/Trash.svg'
import heartPulse from '../images/heartPulse.svg'
import edit from '../images/edit.svg'
import { UserConsumer } from '../../providers/UserProvider';
import {Modal} from 'react-bootstrap';
import UserForm from './UserForm'

const UserShow = ({updateUser, deleteUser}) => {
  const { id } = useParams()
  const [user, setUser] = useState({ first: '', last: '', image: '' , phone: ''})
  const { first, last, image, phone } = user 
  const [editing, setEdit] = useState(false)
  const[UserDoctors, setUsersDoctors] = useState([])

  useEffect( () => {
    axios.get(`/api/users/${id}`)
      .then( res => {
        setUser(res.data)
      })
      .catch( err => console.log(err))
  }, [])

  useEffect( () => {
    axios.get(`/api/doctors/${id}/doctorUsers`)
      .then( res => setUsersDoctors(res.data) )
      .catch( err => console.log(err) )
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
      <BtnCrud className ="btn-crud" onClick={() => setEdit(true)}>
        <img src={edit}  alt="yo edit btn"/>
      </BtnCrud>

      <Modal show={editing} onHide={() => setEdit(false)}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
          <UserForm 
            id={id}
            first={first}
            last={last}
            image={image}
            phone={phone}
            setEdit={setEdit}
            updateUser={updateUser}
          />
        </Modal.Body>
      </Modal>


      <BtnCrud className ="btn-crud" onClick={() => deleteUser(id)}>
        <img src={Trash}  alt="yo trash btn"/>
      </BtnCrud>
    </Buttons>

    <br />
    <h1 style={{marginTop: '60px', textAlign: 'center'}}> doctors for this {first}</h1>
      { UserDoctors.map( ud => 
        <div>
          <h1>{ud.first}</h1>
          <p>{ud.last}</p>
          <p>{ud.phone}</p>
        </div> 
      )}
  </Centered>


      
    </>
  )
}

const ConnectedUsers = (props) => (
  <UserConsumer>
    { value => <UserShow {...props} {...value} /> }
  </UserConsumer>
)

export default ConnectedUsers;