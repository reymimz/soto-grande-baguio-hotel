import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import soto from "../../images/baguio.jpg";


const CNavbar = () => {
return (
  <>
    <Navbar fixed="top" collapseOnSelect expand="md" bg="white" variant="light">
      <Container>
        <Navbar.Brand href="#">
          <img src={soto} className="soto" alt="" width="60%" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <NavDropdown title="Rooms" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/rooms">Rooms</NavDropdown.Item>
              <NavDropdown.Item href="/rooms">Reservation</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="/gallery">Gallery</Nav.Link>
            <Nav.Link href="/reviews">Reviews</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/location">Location</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </>
);
}

export default CNavbar;