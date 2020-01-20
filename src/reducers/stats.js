export default (state = [], action) => {
    switch (action.type) {
        case 'LIST_STATS':
            return action.stats
        default:
            return state
    }
}