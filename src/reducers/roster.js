export default (state = [], action) => {
  switch (action.type) {
    case "LIST_ROSTER":
      return action.roster;
    default:
      return state;
  }
};
