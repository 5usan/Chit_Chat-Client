import React from "react";
import Sidebar from "../Sidebar/Sidebar";

const Dashboard = ({ id }) => {
  return (
    <div style={{ height: "100vh" }} className="d-flex">
      <Sidebar id={id} />
    </div>
  );
};

export default Dashboard;
