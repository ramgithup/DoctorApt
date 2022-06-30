import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import Med from '../images/med.png'
import twitter from '../images/twitter.svg'
import { BtnCrud } from '../shared/styles/Style'
import { ContactNum } from '../shared/styles/Style'
import { DoctorImg,HeaderBtns } from '../shared/styles/Style';

const HomeBody = () => {
  return (
    <>
    <Container>
      <Row style={{display: 'flex',padding: "20px 0px 30px 10px", alignItems: 'center' }}>
      <Col>
      <DoctorImg src={Med}></DoctorImg>
    </Col>
      
      <Col>
          <h3 style={{color: "#64FCD9"}}>Leading Industry Technologies and Advance Treatments</h3>
          <p style={{marginBottom: "30px", color: "#FFC855"}}>
          We have the top technological innovations in all of the tools, equipments, and facilities we have on site. You can expect the fastest and best success rate with our care with over 
          60,000 thousands locations around the world. 
          </p>
        </Col>
      </Row>
      </Container>
      
    </>
  )
}

export default HomeBody;
