const defaultState = {
    posts: []
}

export const posts = (state = defaultState, action) => {
    switch (action.type) {
        case 'POSTS':
            return {...state, posts: action.payload}
        case 'USER_POSTS':
            return {...state, posts: action.payload}
        case 'ADD_POSTS':
            return {...state, posts: [...state.posts, action.payload]}
        case 'REMOVE_POST':
            return {...state, posts: state.posts.filter(post => post._id !== action.payload)}
        default:
            return state
    }
}

