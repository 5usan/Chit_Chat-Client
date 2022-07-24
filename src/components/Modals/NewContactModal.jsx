import React, { useRef } from "react";
import {  useDispatch } from "react-redux/es/exports";
import { createContact } from "../../store/slices/contactSlice";
import { Button, Form, Modal } from "react-bootstrap";

const NewContactModal = ({ closeModal }) => {
  const idRef = useRef();
  const nameRef = useRef();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      createContact({ id: idRef.current.value, name: nameRef.current.value })
    );
    closeModal();
  };
  return (
    <>
      <Modal.Header closeButton>Create Contact</Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>ID</Form.Label>
            <Form.Control type="text" ref={idRef} required></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" ref={nameRef} required></Form.Control>
          </Form.Group>
          <Button type="submit" className="mt-2">
            Create
          </Button>
        </Form>
      </Modal.Body>
    </>
  );
};

export default NewContactModal;
