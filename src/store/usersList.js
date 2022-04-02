const defaultState = {
    isLoading: false,
    users: [],
}

export const usersList = (state = defaultState, action) => {
    switch (action.type) {
        case 'USERS':
            return {...state, users: action.payload}
        case 'USERS_LOADING':
            return {...state, isLoading: action.payload}
        default:
            return state
    }
}

