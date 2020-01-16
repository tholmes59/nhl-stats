export const listRoster = roster => {
    return {
        type: 'LIST_ROSTER',
        roster
    }
}


export const fetchRoster = id => {
    return (dispatch) => {
        return fetch(`https://statsapi.web.nhl.com/api/v1/teams/${id}/roster`)
        .then(r => r.json())
        .then(roster => {
            console.log(roster)
            if (roster.error) {
                alert(roster.error)
            } else {
                dispatch(listRoster(roster))
            }
        })
    }
}