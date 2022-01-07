import React, { useState } from "react";
import { MyInput } from "../IU/Input/MyInput";
import { api } from "../configuration/Response";
import { PUT } from "../configuration/PUT";
import { DELETE } from "../configuration/DELETE";
function UserCard(props) {
  const [user, editUser] = useState(props.user);
  function delUser(e) {
    DELETE(e, api, props);
  }
  const [btn, editBtn] = useState({
    className: "edit",
  });
  const [input, setInput] = useState({
    disabled: true,
    style: { backgroundColor: "inherit", border: "none" },
  });
  function focus() {
    if (input.disabled) {
      setInput({
        ...input,
        disabled: false,
        style: { border: "1px solid blue" },
      });
      editBtn({ ...btn, className: "active" });
    } else {
      setInput({
        disabled: true,
        style: { backgroundColor: "inherit", border: "none" },
      });
      editBtn({ ...btn, className: "edit" });
      PUT(api, { ...user });
    }
  }

  return (
    <li>
      <div data-js={props.user.id} className="user">
        <div className="user-box">
          <div className="user-content">
            <label htmlFor="user-name">Imię:</label>
            <MyInput
              onChange={(e) =>
                editUser({ ...user, first_name: e.target.value })
              }
              {...input}
              data-js=""
              name="user-name"
              defaultValue={props.user.first_name}
              type="text"
            />
          </div>
          <div className="user-content">
            <label htmlFor="user-last_name">Nazwisko:</label>
            <MyInput
              onChange={(e) => editUser({ ...user, last_name: e.target.value })}
              {...input}
              data-js=""
              name="user-last_name"
              defaultValue={props.user.last_name}
              type="text"
            />
          </div>
          <div className="user-content">
            <label htmlFor="user-email">Emale:</label>
            <MyInput
              onChange={(e) => editUser({ ...user, email: e.target.value })}
              {...input}
              data-js=""
              name="user-emale"
              defaultValue={props.user.email}
              type="email"
            />
          </div>
        </div>
        <div className="user-btn">
          <button onClick={focus} type="button" {...btn}></button>
          <button onClick={delUser} type="button" className="delete"></button>
        </div>
      </div>
    </li>
  );
}
export default UserCard;
