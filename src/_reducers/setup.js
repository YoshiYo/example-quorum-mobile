import { APP_SETUP_I18N } from '../_actions/constants';

const initialState = {
  I18n: {},
  langReady: false,
  currentLang: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case APP_SETUP_I18N: {
      const I18n = action.payload;
      let currentLang = null;
      let defaultLang = null;
      const myLang = I18n.locale.substring(0, 2);
      if (myLang in I18n.translations) {
        currentLang = I18n.translations[myLang];
      } else {
        defaultLang = I18n.defaultLocale;
        currentLang = I18n.translations[defaultLang];
      }
      return {
        ...state,
        I18n: I18n,
        langReady: true,
        currentLang: currentLang,
      };
    }

    default:
      return state;
  }
};
