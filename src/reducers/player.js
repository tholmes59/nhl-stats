export default (state = [], action) => {
    switch (action.type) {
        case 'LIST_PLAYER':
            return action.player
        default:
            return state
    }
}