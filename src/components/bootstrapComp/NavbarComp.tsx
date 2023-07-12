import { Fragment, useState } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import LoginDialog from './LoginDialog';

export default function NavbarComp() {
  const [showDialog, setShowDialog] = useState(false);

  const handleCloseDialog = () => setShowDialog(false);
  const handleShowDialog = () => setShowDialog(true);

  return (
    <Fragment>
      <Navbar bg="light" data-bs-theme="light" expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <LinkContainer to="/">
            <Navbar.Brand>MyShopLists</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0 align-items-center"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <LinkContainer to="/admin">
                <Nav.Link>Admin</Nav.Link>
              </LinkContainer>
              <Button
                variant="link"
                className="nav-link"
                onClick={handleShowDialog}
              >
                Login
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <LoginDialog show={showDialog} handleClose={handleCloseDialog} />
    </Fragment>
  );
}
