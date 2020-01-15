export const listTeams = teams => {
    return {
        type: 'LIST_TEAMS',
        teams
    }
}


export const fetchTeams = () => {
    return (dispatch) => {
        return fetch(`https://statsapi.web.nhl.com/api/v1/teams`)
        .then(r => r.json())
        .then(teams => {
            console.log(teams)
            if (teams.error) {
                alert(teams.error)
            } else {
                dispatch(listTeams(teams))
            }
        })
    }
}