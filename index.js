import Expo from 'expo';
import React from 'react';
import { Provider } from 'react-redux';
import App from './src/_containers/_setup/App';
import store from './src/_store/index';

class RootQuorumApplication extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

Expo.registerRootComponent(RootQuorumApplication);
