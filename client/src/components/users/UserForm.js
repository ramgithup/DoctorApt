import { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';

const UserForm = ({ addUser, id, first, last, image, phone, setEdit, updateUser  }) => {
  const [user, setUser] = useState({ first: '', last: '', image: '', phone: '' })



  useEffect( () => {
    if (id) {
      setUser({ first, last, image , phone})
    }
  }, [])


  const handleSubmit = (e) => {
    e.preventDefault()
    if (id) {
      updateUser(id, user)
      setEdit(false)
    } else {
      addUser(user)
    }
    setUser({ first: '', last: '', image: '', phone: '' })
  }

  return (
    <>
      <h1 style={{color: '#64FCD9', textAlign: 'center'}}>{id ? 'Edit' : 'Create'} User</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>First Name</Form.Label>
          <Form.Control 
            name='first'
            value={user.first}
            onChange={(e) => setUser({ ...user, first: e.target.value })}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Last Name</Form.Label>
          <Form.Control 
            name='last'
            value={user.last}
            onChange={(e) => setUser({ ...user, last: e.target.value })}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Profile Image</Form.Label>
          <Form.Control 
            name='image'
            value={user.image}
            onChange={(e) => setUser({ ...user, image: e.target.value })}
            required
          />
          
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>phone number</Form.Label>
          <Form.Control 
            name='phone'
            value={user.phone}
            onChange={(e) => setUser({ ...user, phone: e.target.value })}
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

export default UserForm;