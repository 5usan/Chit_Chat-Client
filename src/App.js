import React from "react";
import Login from "./components/Login/Login";
import useLocalStorage from "./hooks/useLocalStorage";

function App() {
  const [id, setId] = useLocalStorage("id");
  console.log(id);
  return <Login onIdSubmit={setId} />;
}

export default App;
