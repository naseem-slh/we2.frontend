import { Modal, Form, Button } from 'react-bootstrap';

type Props = {
  handleClose: ()=> void;
  show: boolean;
};

export default function LoginDialog({ show, handleClose }: Props) {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Login</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="ControlInput1">
            <Form.Label>E-Mail</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" autoFocus />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Passwort</Form.Label>
            <Form.Control type="password" placeholder="Passwort" autoFocus />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancel
        </Button>
        <Button variant="primary" onClick={handleClose}>
          OK
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
