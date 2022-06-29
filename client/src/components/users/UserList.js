import { ListGroup, Button } from "react-bootstrap";
import { Link } from 'react-router-dom';
import {Container, Row, Col, Card} from 'react-bootstrap';

const UserList = ({ users }) => (
  <>
    

    <Container>
        <h1>All Users</h1>
      </Container>

      <Container className="mb-5 mt-2">
        <Row md={4} xs={12}>
          {users.map((u) => (
            <Col>
              <Card style={{ width: '14rem' }}>
                <Card.Body>
                  <Card.Img variant="top" src={u.image} />
                  <Card.Title className="mt-4"> {u.first} {u.last}</Card.Title>
                  <Card.Text className="mt-2">
                    phone: {u.phone}
                  </Card.Text>
                  <Card.Link>
                     <Link to={`/users/${u.id}`}>
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

export default UserList;