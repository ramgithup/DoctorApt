import React from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const DoctorsList = ({ doctors }) => {
  return (
    <>
      <Container>
        <h1>Doctors</h1>
      </Container>

      <Container className="mb-5 mt-2">
        <Row md={4} xs={12}>
          {doctors.map((d) => (
            <Col>
              <Card style={{ width: '14rem' }}>
                <Card.Body>
                  <Card.Img variant="top" src={d.image} />
                  <Card.Title className="mt-4"> Dr. {d.first_name}</Card.Title>
                  <Card.Text className="mt-2">
                    Specialist: {d.specicialist}
                  </Card.Text>
                  <Card.Link>
                    <Link to={`/doctors/${d.id}`}>
                      <Button variant="dark">Show</Button>
                    </Link>
                  </Card.Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  )
}

export default DoctorsList
