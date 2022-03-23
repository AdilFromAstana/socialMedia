import photoDiana from './../icons/userDiana.jpg';
import photoDias from './../icons/userDias.jpg';

const defaultState = {
    Diana: {
        name: 'Diana',
        surname: 'Aizhanova',
        allname: 'Diana Aizhanova',
        photo: photoDiana,
    },
    Dias: {
        name: 'Diana',
        surname: 'Aizhanov',
        allname: 'Dias Aizhanov',
        photo: photoDias,
    }
}

export const userList = (state=defaultState, action) => {
    switch (action.type){
        default:
            return state
    }
}