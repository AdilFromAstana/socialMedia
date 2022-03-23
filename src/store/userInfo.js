import userAdil from './../icons/userAdil.jpg'

const defaultState = {
    photo: userAdil,
}

export const userInfo = (state=defaultState, action) => {
    switch(action.type){
        case'editInfo':
            return {photo: userAdil}

        default:
            return state
    }
}