const defaultState = {
    users: []
}

export const friendsList = (state = defaultState, action) => {
    switch (action.type) {
        case 'FRIENDS_LIST':
            return {...state, users: action.payload}
        default:
            return state
    }
}

