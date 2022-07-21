import { useState } from "react";
import Login from "./components/Login/Login";

function App() {
  const [id, setId] = useState();
  console.log(id);
  return <Login onIdSubmit={setId} />;
}

export default App;
