import { combineReducers } from "redux";

import teams from "./teams";
import roster from "./roster";
import player from "./player";
import stats from "./stats";

const rootReducer = combineReducers({
  teams: teams,
  roster: roster,
  player: player,
  stats: stats
});

export default rootReducer;
