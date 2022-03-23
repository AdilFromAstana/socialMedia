const defaultState = null

export const isAuth = (state=defaultState, action) => {
    switch(action.type){
        case 'true':
            return true

        case 'false':
            return false

        default:
            return state
    }
}