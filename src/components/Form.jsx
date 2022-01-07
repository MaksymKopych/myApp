import React, { useState } from "react";
import { api } from "../configuration/Response";
import { MyBtn } from "../IU/Button/MyBtn";
import { MyInput } from "../IU/Input/MyInput";
import { POST } from "../configuration/POST";
const Form = ({ create, ...props }) => {
  const [user, setUser] = useState({
    id: "",
    first_name: "",
    last_name: "",
    email: "",
  });
  const addNewUser = (e) => {
    e.preventDefault();
    const newUser = {
      ...user,
      id: Date.now(),
    };
    if (user.first_name && user.last_name && user.email) {
      create(newUser);
      POST(api, { ...user });
      setUser({
        id: "",
        first_name: "",
        last_name: "",
        email: "",
      });
    } else {
      console.log("wypelni wszystkie pola");
    }
  };
  return (
    <form className="form contener">
      <h1 className="form-text">Dodaj nowego użytkownika</h1>
      <div className="form-contener">
        <div className="form-content">
          <label htmlFor="first_name">Imię:</label>
          <MyInput
            onChange={(e) => setUser({ ...user, first_name: e.target.value })}
            value={user.first_name}
            id="name"
            name="first_name"
            type="text"
          />
        </div>
        <div className="form-content">
          <label htmlFor="last_name">Nazwisko:</label>
          <MyInput
            onChange={(e) => setUser({ ...user, last_name: e.target.value })}
            value={user.last_name}
            id="last_name"
            name="last_name"
            type="text"
          />
        </div>
        <div className="form-content">
          <label htmlFor="email">Email:</label>
          <MyInput
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            value={user.email}
            id="email"
            name="emale"
            type="email"
          />
        </div>
        <MyBtn onClick={addNewUser}>Dodaj</MyBtn>
      </div>
    </form>
  );
};
export default Form;
