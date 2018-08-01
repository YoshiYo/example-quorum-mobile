import { connect } from 'react-redux';
import Welcome from '../../components/welcome/welcome';
import { WELCOME_ONBOARDING_MESSAGE } from '../../_actions/index';

const mapStateProps = (state) => {
  const stateForStore = {
    welcome_message: state.welcome.welcome_message,
  };
  return stateForStore;
};

const mapDispatchProps = (dispatch) => {
  const functionsForStore = {
    initTheWelcomeMessage: () => {
      dispatch({
        type: WELCOME_ONBOARDING_MESSAGE,
      });
    },
  };
  return functionsForStore;
};

export default connect(mapStateProps, mapDispatchProps)(Welcome);
