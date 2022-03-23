const defaultState = {
    users: []
}

export const usersList = (state = defaultState, action) => {
    switch (action.type) {
        case 'USERS':
            return {...state, users: action.payload}
        default:
            return state
    }
}

