export const api = "http://localhost:8000/users";
export const deleteUser = (id) => {
  return fetch(`${api}/` + id, {
    method: "DELETE",
  }).then((res) => {
    return res.json();
  });
};

export const postUser = (userData) => {
  return fetch(api, {
    method: "POST",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify(userData),
  }).then((res) => {
    return res.json();
  });
};

export const putUser = (id, props) => {
  return fetch(`${api}/` + id, {
    method: "PUT",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify(props),
  }).then((res) => {
    return res.json();
  });
};
