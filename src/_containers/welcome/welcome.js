import { connect } from 'react-redux';
import Welcome from '../../components/welcome/welcome';
import * as actions from '../../_actions/WelcomeActions';

const mapStateProps = (state) => {
  const stateForStore = {
    welcomeMessage: state.welcome.welcomeMessage,
  };
  return stateForStore;
};

const mapDispatchProps = (dispatch) => {
  const functionsForStore = {
    initTheWelcomeMessage: () => {
      dispatch(actions.welcomeMessage());
    },
  };
  return functionsForStore;
};

export default connect(mapStateProps, mapDispatchProps)(Welcome);
