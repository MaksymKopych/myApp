export const PUT = (api, props) => {
  fetch(`${api}/` + props.id, {
    method: "PUT",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify(props),
  });
};
