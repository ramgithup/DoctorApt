import { useState, useEffect } from 'react'
import axios from 'axios'
import CourseList from './DoctorsList'
import DoctorForm from './DoctorForm'
import { Modal } from 'react-bootstrap'
import {MainBtn} from '../shared/styles/Style'
import {DoctorConsumer} from '../../providers/DoctorProvider';

const Doctors = ({addDoctor, doctors} ) => {
  
  const [adding, setAdd] = useState(false)

  
  

  return (
    <div>
    <MainBtn onClick={() => setAdd(true)} >+</MainBtn>

    <Modal show={adding} onHide={() => setAdd(false)}>
      <Modal.Header closeButton>
      </Modal.Header>
      <Modal.Body>
      <DoctorForm addDoctor={addDoctor} />
      </Modal.Body>
    </Modal>
      
      <CourseList doctors={doctors} />
    </div>
  )
}
const ConnectedDoctors =(props)=>(
 <DoctorConsumer>
 {value => <Doctors {...props} {...value}/>}
 </DoctorConsumer>

)
export default ConnectedDoctors;
