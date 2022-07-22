import { Tab, Nav, Button, Modal } from "react-bootstrap";
import React, { useState } from "react";
import Conversations from "../Conversations/Conversations";
import Contacts from "../Contacts/Contacts";
import NewConversationModal from "../Modals/NewConversationModal";
import NewContactModal from "../Modals/NewContactModal";

const CONVERSATIONS_KEY = "Conversations";
const CONTACTS_KEY = "Contacts  ";

const Sidebar = ({ id }) => {
  const [activeKey, setActiveKey] = useState(CONVERSATIONS_KEY);
  const [modalOpen, setModalOpen] = useState(false);

  const conversationsOpen = activeKey === CONVERSATIONS_KEY;

  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <div style={{ maxWidth: "250px" }} className="d-flex flex-column">
      <Tab.Container activeKey={activeKey} onSelect={setActiveKey}>
        <Nav variant="tabs" className="justify-content-center">
          <Nav.Item>
            <Nav.Link eventKey={CONVERSATIONS_KEY}>
              {CONVERSATIONS_KEY}
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey={CONTACTS_KEY}>{CONTACTS_KEY}</Nav.Link>
          </Nav.Item>
        </Nav>
        <Tab.Content
          className="overflow-auto flex-grow-1"
          style={{ borderRight: "1px solid #DEE2E6" }}
        >
          <Tab.Pane eventKey={CONVERSATIONS_KEY}>
            <Conversations />
          </Tab.Pane>
          <Tab.Pane eventKey={CONTACTS_KEY}>
            <Contacts />
          </Tab.Pane>
        </Tab.Content>
        <div
          className="p-2 small"
          style={{
            borderRight: "1px solid #DEE2E6",
            borderTop: "1px solid #DEE2E6",
          }}
        >
          Your ID : <span className="text-muted">{id}</span>
        </div>

        <Button
          className="rounded-0"
          onClick={() => {
            setModalOpen(true);
          }}
        >
          New {conversationsOpen ? "Conversation" : "Contact"}
        </Button>
      </Tab.Container>

      <Modal show={modalOpen} onHide={closeModal}>
        {conversationsOpen ? (
          <NewConversationModal closeModal={closeModal} />
        ) : (
          <NewContactModal closeModal={closeModal} />
        )}
      </Modal>
    </div>
  );
};

export default Sidebar;
