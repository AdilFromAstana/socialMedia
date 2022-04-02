const defaultState = {
    isAuth: false,
    isLoading: false,
    user: {},
}

export const userAuth = (state = defaultState, action) => {
    switch (action.type) {
        case 'LOGIN_USER':
            return {...state, user: action.payload}
        case 'LOGIN_AUTH':
            return {...state, isAuth: action.payload}
        case 'LOGIN_LOADING':
            return {...state, isLoading: action.payload}
        default:
            return state
    }
}
