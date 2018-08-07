import { APP_SETUP_I18N } from '../_actions/constants';

const initialState = {
  I18n: {},
  currentLang: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case APP_SETUP_I18N: {
      const I18n = action.payload;
      return {
        ...state,
        I18n: I18n,
      };
    }

    default:
      return state;
  }
};
