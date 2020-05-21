export const listStats = (stats) => {
  return {
    type: "LIST_STATS",
    stats,
  };
};

export const fetchPlayerStats = (id) => {
  return (dispatch) => {
    return fetch(
      `https://statsapi.web.nhl.com/api/v1/people/${id}/stats?stats=yearByYear`
    )
      .then((r) => r.json())
      .then((stats) => {
        if (stats.error) {
          alert(stats.error);
        } else {
          dispatch(listStats(stats));
        }
      });
  };
};
