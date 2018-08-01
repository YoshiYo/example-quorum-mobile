import * as actions from '../../src/_actions/WelcomeActions';
import store from '../../src/_store/index';

describe('Testing the store', () => {
  /* WITH FETCHING DATA
  afterEach(() => {
    fetchMock.reset()
    fetchMock.restore()
  });
  */

  it('Change the state of the state after calling the Welcome Action', () => {
    // On récupère le state actuel du store
    let actualState = store.getState();
    // On s'attends que le state soit égale à l'état inital
    expect(actualState.welcome.welcomeMessage).toEqual('Welcome');
    // On déclenche l'action
    store.dispatch(actions.welcomeMessage());
    // On re-récupère le state
    actualState = store.getState();
    // On vérifie la valeur finale
    expect(actualState.welcome.welcomeMessage).toEqual('Welcome Greg');
  });
});
