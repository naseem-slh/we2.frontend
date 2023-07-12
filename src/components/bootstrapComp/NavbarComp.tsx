import { Navbar, Nav, Form, Container, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

export default function NavbarComp() {
  return (
    <div>
      <Navbar bg="light" data-bs-theme="light" expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <LinkContainer to="/">
            <Navbar.Brand >MyShopLists</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
            //classname schiebt irgendiw die Form nach rechts
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <LinkContainer to="/admin">
                <Nav.Link>Admin</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/login">
                <Nav.Link>Login</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

