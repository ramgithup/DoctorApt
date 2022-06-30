import React from 'react'
import Accordion from 'react-bootstrap/Accordion'
import { Container } from 'react-bootstrap'
const HomeFaqs = () => {
  return (
    <>
      <h1 style={{margin: '30px auto', textAlign: 'center', color: '#64FCD9'}}>FAQs</h1>
      <Container style={{ paddingBottom: '15%' }}>
        <Accordion defaultActiveKey="0" flush>
          <Accordion.Item eventKey="0">
            <Accordion.Header style={{color: '#FFC855'}}>How much does it cost?</Accordion.Header>
            <Accordion.Body style={{color: '#FFC855'}}>
              All of the cost will be covered by all insurance companies and our
              rich benefactors and sponsors to keep the cost free and provide a
              wide range of access to healthcare.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header style={{color: '#FFC855'}}>What care do you provide?</Accordion.Header>
            <Accordion.Body style={{color: '#FFC855'}}>
              We provide care all the way from pediatrics, to family doctors.
              From heads to toes, in and out, we provide all the care needed for
              patients and link them up to the correct needed specialist.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header style={{color: '#FFC855'}}>How do I make a appointment?</Accordion.Header>
            <Accordion.Body style={{color: '#FFC855'}}>
              To make a appointment, all you need is to call the number and
              provide the receptionist the info needed and you are all set! We
              will put you in our system and connect everything for you. It is
              that easy!{' '}
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <div style={{margin: '0 auto', padding: '60px', textAlign: 'center'}}>
          <h4 style={{color:'#64FCD9'}}>Still have a question?</h4>
          <p style={{color:'#FFC855'}}>Drop us a call</p>
          <button>(123) 123-1234</button>
        </div>
      </Container>
    </>
  )
}

export default HomeFaqs
