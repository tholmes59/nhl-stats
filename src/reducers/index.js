import { combineReducers } from 'redux'

import teams from './teams';
import roster from './roster'

const rootReducer = combineReducers({
    teams: teams,
    roster: roster
})

export default rootReducer