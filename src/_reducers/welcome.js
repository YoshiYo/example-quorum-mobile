import { WELCOME_ONBOARDING_MESSAGE } from '../_actions/index';

const initialState = {
    welcome_message: 'Welcome'
};

export default (state= initialState, action ) => {
    switch(action.type){
        case WELCOME_ONBOARDING_MESSAGE: {
            return {
                ...state,
                welcome_message: 'Welcome Greg'
            }
        }

        default:
            return state


    }
}

