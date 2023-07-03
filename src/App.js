import "./App.css";
import { useContext } from "react";
import Nav from "./Components/Nav/Nav";

import Login from "./Components/ContextProvider/Login";
import Home from "./Components/ContextProvider/Home";
import AuthContext from "./Components/ContextProvider/Context";

function App(props) {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <div className="App">
      <Nav />

      {isLoggedIn ? <Home /> : <Login />}
    </div>
  );
}

export default App;
