const defaultState = {
    isAuth: false,
    isLoading: false,
    user: {},
}

export const userInfo = (state = defaultState, action) => {
    switch (action.type) {
        case 'ANYUSER':
            return {...state, user: action.payload}
        case 'ANYUSER_AUTH':
            return {...state, isAuth: action.payload}
        case 'ANYUSER_LOADING':
            return {...state, isLoading: action.payload}
        default:
            return state
    }
}