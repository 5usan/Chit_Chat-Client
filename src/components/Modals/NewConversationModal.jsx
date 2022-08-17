import React from "react";
import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useContacts } from "../../contexts/ContactsProvider";
import { useConversations } from "../../contexts/ConversationsProvider";

const NewConversationModal = ({ closeModal }) => {
  const [selectedContactIds, setSelectedContactIds] = useState([]);
  const { contacts } = useContacts();
  const { createConversation } = useConversations();
  console.log(selectedContactIds);

  const handleSubmit = (e) => {
    e.preventDefault();
    createConversation(selectedContactIds);
    closeModal();
  };

  const handleCheckboxChange = (contactId) => {
    setSelectedContactIds((prepContactsId) => {
      if (prepContactsId.includes(contactId)) {
        return prepContactsId.filter((prevId) => {
          return contactId !== prevId;
        });
      }
      return [...prepContactsId, contactId];
    });
  };
  return (
    <>
      <Modal.Header closeButton>Create Conversation</Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          {contacts.map((contact) => (
            <Form.Group controlId={contact.id} key={contact.id}>
              <Form.Check
                type="checkbox"
                value={selectedContactIds.includes(contact.id)}
                label={contact.name}
                onChange={() => {
                  handleCheckboxChange(contact.id);
                }}
              ></Form.Check>
            </Form.Group>
          ))}
          <Button type="submit" className="mt-2">
            Create
          </Button>
        </Form>
      </Modal.Body>
    </>
  );
};

export default NewConversationModal;
