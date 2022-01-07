export const POST = (api, props) => {
  fetch(api, {
    method: "POST",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify(props),
  });
};
