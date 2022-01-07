export const DELETE = (e, api, props) => {
  if (e.target.closest(".delete")) {
    let deletedUser = e.target.closest("li");
    e.preventDefault();
    deletedUser.remove();
    fetch(`${api}/` + props.user.id, {
      method: "DELETE",
    });
  }
};
