import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from 'react-router-dom';

const MainNavbar = () => (
  <>
    <Navbar>
      <Container>
        <Link to='/' style={{textDecoration:"none", fontSize: "30px"}}><Navbar.Brand style={{color: '#64FCD9'}}><span style={{ fontWeight: '800',}}>Dr</span>Appt</Navbar.Brand></Link>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav.Link>
            <Link to='/users' style={{textDecoration:"none", color:"#FFC855"}}>
              Users
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link to='/Doctors' style={{textDecoration:"none", color:"#FFC855"}}>
              Doctors
            </Link>
          </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </>
)

export default MainNavbar;