import { WELCOME_ONBOARDING_MESSAGE } from '../_actions/constants';

const initialState = {
  welcomeMessage: 'Welcome',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case WELCOME_ONBOARDING_MESSAGE: {
      return {
        ...state,
        welcomeMessage: 'Welcome Greg',
      };
    }

    default:
      return state;
  }
};
