import axios from "axios";
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/pages/Home";
import SingleUser from "./components/pages/SingleUser";
const App = () => {
  const [users, setUsers] = useState([]);
  // getUsers
  const getUsers = async () => {
    const { data } = await axios.get(`http://localhost:5000/users`);
    setUsers(data);
  };
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home users={users} getUsers={getUsers} />
        </Route>
        <Route path="/single-user/:id" exact>
          <SingleUser />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
