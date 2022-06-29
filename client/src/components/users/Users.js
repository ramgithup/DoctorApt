import { useState, useEffect } from 'react';
import axios from 'axios';
import UserList from './UserList';
import UserForm from './UserForm';
import { Modal } from 'react-bootstrap'
import {MainBtn} from '../shared/styles/Style';

const Users = () => {
  const [users, setUsers] = useState([])
  const [adding, setAdd] = useState(false)

  useEffect( () =>{
    axios.get('/api/users')
      .then( res => {
        setUsers(res.data)
      })
      .catch( err => console.log(err))
  }, [])

  const addUser = (user) => {
    axios.post('/api/users', { user })
      .then( res => {
        setUsers([...users, res.data])
      })
      .catch( err => console.log(err))
  }

  return(
    <>
    <MainBtn onClick={() => setAdd(true)} >+</MainBtn>

    <Modal show={adding} onHide={() => setAdd(false)}>
      <Modal.Header closeButton>
      </Modal.Header>
      <Modal.Body>
      <UserForm addUser={addUser} />
      </Modal.Body>
    </Modal>
      
      <UserList users={users} />
    </>
  )
}

export default Users;