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

