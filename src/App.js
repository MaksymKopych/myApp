import React, { useState, useEffect } from "react";
import UserCard from "./components/UserCard";
import Form from "./components/Form";
export const api = "http://localhost:8000/users";
function App() {
  const [users, setUsers] = useState([]);

  const createUser = (newUser) => {
    setUsers([...users, newUser]);
  };

  useEffect(() => {
    fetch(api)
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      });
  }, [users.length]);

  return (
    <div className="App">
      <Form create={createUser} />
      <div className="user-list contener">
        <ul className="users">
          {users.map((user) => (
            <UserCard user={user} key={user.id} />
          ))}
        </ul>
      </div>
    </div>
  );
}
export default App;
