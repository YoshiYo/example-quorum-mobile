import * as constants from '../../src/_actions/constants';
import * as actions from '../../src/_actions/WelcomeActions';

describe('actions', () => {
  it('should create an action to dispatch a Welcome Action', () => {
    const text = constants.WELCOME_ONBOARDING_MESSAGE;
    const expectedAction = {
      type: text,
    };
    expect(actions.welcomeMessage()).toEqual(expectedAction);
  });
});
