import React, { useRef } from "react";
import { Container, Form, Button } from "react-bootstrap";

const Login = ({ onIdSubmit }) => {
  const idRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    onIdSubmit(idRef.current.value);
  };
  return (
    <Container
      className="d-flex align-items-center"
      style={{ height: "100vh" }}
    >
      <Form className="w-100" onSubmit={handleSubmit}>
        <Form.Group className="d-flex justify-content-center align-items-center">
          <Form.Label className="w-25 m-0">Enter your ID:</Form.Label>
          <Form.Control type="text" ref={idRef} required />
        </Form.Group>
        <Form.Group className="my-2">
          <Button type="submit">Login</Button>
          <Button variant="secondary" className="mx-2">
            Create a new Id
          </Button>
        </Form.Group>
      </Form>
    </Container>
  );
};

export default Login;
