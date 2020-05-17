export default (state = [], action) => {
  switch (action.type) {
    case "LIST_TEAMS":
      return action.teams;
    default:
      return state;
  }
};
