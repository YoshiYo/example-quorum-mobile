import Welcome from "../../components/welcome/welcome";
import { WELCOME_ONBOARDING_MESSAGE } from '../../_actions/index'
import { connect } from 'react-redux';

const mapStateProps = (state) => {
    return {
        welcome_message: state.welcome.welcome_message,
    }
  };
  
  const mapDispatchProps = (dispatch) => {
      return {
        initTheWelcomeMessage: () => {

            dispatch({
                type: WELCOME_ONBOARDING_MESSAGE
            })
        }
      }
  }
  
  export default connect(
    mapStateProps,
    mapDispatchProps,
  )(Welcome)