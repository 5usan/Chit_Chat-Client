import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import OpenConversation from "../OpenConversation/OpenConversation";
import { useConversations } from "../../contexts/ConversationsProvider";

const Dashboard = ({ id }) => {
  const { selectedConversation } = useConversations();
  return (
    <div style={{ height: "100vh" }} className="d-flex">
      <Sidebar id={id} />
      {selectedConversation && <OpenConversation />}
    </div>
  );
};

export default Dashboard;
