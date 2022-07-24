import React from "react";
import { Provider } from "react-redux";
import Dashboard from "./components/Dashboard/Dashboard";
import Login from "./components/Login/Login";
import useLocalStorage from "./hooks/useLocalStorage";
import { store } from "./store/store";

function App() {
  const [id, setId] = useLocalStorage("id");
  const dashboard = (
    <Provider store={store}>
      <Dashboard id={id} />
    </Provider>
  );

  return id ? dashboard : <Login onIdSubmit={setId} />;
}

export default App;
