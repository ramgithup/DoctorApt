import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import Dr from '../images/Dr.png'
import twitter from '../images/twitter.svg'
import { BtnCrud } from '../shared/styles/Style'
import { ContactNum } from '../shared/styles/Style'
import { DoctorImg,HeaderBtns } from '../shared/styles/Style';

const HomeHeader = () => {
  return (
    <>
    <Container>
      <Row style={{display: 'flex',padding: "20px 0px 30px 10px", alignItems: 'center' }}>
        <Col>
          <h3 style={{color: "#64FCD9"}}>Come Make a Appointment Today!</h3>
          <p style={{marginBottom: "30px", color: "#FFC855"}}>
            We have the best primary caregivers in various fields of expertise.
            You can let us know what you need, and we will pair you off with the
            best expert to help you with your needs.
          </p>
          <HeaderBtns >
            <BtnCrud
              style={{ background: '#64FCD9', height: '48px', width: '48px' }}
            >
              <img src={twitter}></img>
            </BtnCrud>
            <ContactNum style={{marginLeft: '30px'}}> Call Now: (123) 123 - 1234 </ContactNum>
          </HeaderBtns>
        </Col>

        <Col>
          <DoctorImg src={Dr}></DoctorImg>
        </Col>
      </Row>
      </Container>
    </>
  )
}

export default HomeHeader
