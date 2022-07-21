import React from "react";
import Dashboard from "./components/Dashboard/Dashboard";
import Login from "./components/Login/Login";
import useLocalStorage from "./hooks/useLocalStorage";

function App() {
  const [id, setId] = useLocalStorage("id");

  return id ? <Dashboard id={id} /> : <Login onIdSubmit={setId} />;
}

export default App;
