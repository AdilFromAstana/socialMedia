const defaultState = {
    post: [
        
    ]
}

export const post = (state = defaultState, action) => {
    switch (action.type) {
        case 'POST':
            return {...state, post: {...post, anyPost: action.payload}}
        default:
            return state
    }
}