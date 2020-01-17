export const listPlayer = player => {
    return {
        type: 'LIST_PLAYER',
        player
    }
}


export const fetchPlayer = id => {
    return (dispatch) => {
        return fetch(`https://statsapi.web.nhl.com/api/v1/people/${id}`)
        .then(r => r.json())
        .then(player => {
            console.log(player)
            if (player.error) {
                alert(player.error)
            } else {
                dispatch(listPlayer(player))
            }
        })
    }
}

export const listStats = stats => {
    return {
        type: 'LIST_STATS',
        stats
    }
}


export const fetchPlayerStats = id => {
    return (dispatch) => {
        return fetch(`https://statsapi.web.nhl.com/api/v1/people/${id}/stats?stats=yearByYear`)
        .then(r => r.json())
        .then(stats => {
            console.log(stats)
            if (stats.error) {
                alert(stats.error)
            } else {
                dispatch(listStats(stats))
            }
        })
    }
}