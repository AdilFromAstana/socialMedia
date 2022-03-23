const defaultState = {
    post: []
}

export const post = (state = defaultState, action) => {
    switch (action.type) {
        case 'POST':
            return {...state, post: action.payload}
        default:
            return state
    }
}