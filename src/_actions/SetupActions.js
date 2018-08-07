import { APP_SETUP_I18N } from './constants';

export function setupI18n(I18n) {
  return {
    type: APP_SETUP_I18N,
    payload: I18n,
  };
}