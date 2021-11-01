import { useEffect, useState } from "react";
import "./App.css";
import Image from "./assets/14.jpg";
import Card from "./components";
import api from "./services/api";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    api.get("").then((response) => {
      setUsers(response.data.results);
      console.log(users);
    });
  }, []);

  return (
    <div className="container">
      {users.map((user) => {
        return <Card key={user} img={user.picture.large} name={user.name.first}/>;
      })}
    </div>
  );
}

export default App;
