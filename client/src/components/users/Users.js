import { useState } from 'react';
import axios from 'axios';
import UserList from './UserList';
import UserForm from './UserForm';
import { Modal } from 'react-bootstrap'
import {MainBtn} from '../shared/styles/Style';
import { UserConsumer } from '../../providers/UserProvider';

const Users = ({users, addUser }) => {
  
  const [adding, setAdd] = useState(false)

  

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
const ConnectedUsers = (props) => (
  <UserConsumer>
    { value => <Users {...props} {...value} /> }
  </UserConsumer>
)

export default ConnectedUsers;