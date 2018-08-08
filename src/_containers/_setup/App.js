import { connect } from 'react-redux';
import App from '../../components/App';
import * as actions from '../../_actions/SetupActions';

const mapStateProps = (state) => {
  const stateForStore = {
    I18n: state.setup.I18n,
    langReady: state.setup.langReady,
  };
  return stateForStore;
};

const mapDispatchProps = (dispatch) => {
  const functionsForStore = {
    setupI18n: (I18n) => {
      dispatch(actions.setupI18n(I18n));
    },
  };
  return functionsForStore;
};

export default connect(mapStateProps, mapDispatchProps)(App);