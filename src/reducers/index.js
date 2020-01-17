import { combineReducers } from 'redux'

import teams from './teams';
import roster from './roster';
import player from './player';

const rootReducer = combineReducers({
    teams: teams,
    roster: roster,
    player: player
})

export default rootReducer